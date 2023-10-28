import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getResult, deleteResult, editResult } from '../../../service/api';
import { ToastContainer, toast } from 'react-toastify';
import { Trash, FileEdit, PlusCircle } from 'lucide-react';
import { ChevronLeftCircle } from 'lucide-react';

function ViewResult() {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);

//   const fetchResults = async () => {
//     try {
//       const response = await getResult();
//       setResults(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
const fetchResults = async () => {
    try {
      const response = await getResult();
      const resultsWithGrades = response.data.map((result) => ({
        ...result,
        grade: calculateGrade(result),
      }));
      setResults(resultsWithGrades);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleEdit = (resid) => {
    navigate(`/admin/result/edit/${resid}`);
  };

  const handleDelete = async (resid, res1) => {
    try {
      const res = await deleteResult(resid);
      console.log(res.status);
      if (res.status === 200) {
        toast.success(`Result deleted successfully !`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
      fetchResults();
    } catch (error) {
      console.log(error);
    }
  };
  
  const calculateGrade = (result) => {
    const results = Object.values(result).slice(1); // Exclude the first property (e.g., resid) when calculating grades
    const isFail = results.some((mark) => parseInt(mark) < 50);
  
    if (isFail) {
      return 'Fail';
    }
  
    const numericalValue = results.reduce((acc, result) => acc + parseInt(result), 0) / results.length;
  
    if (numericalValue >= 90) {
      return 'A+';
    } else if (numericalValue >= 80) {
      return 'A';
    } else if (numericalValue >= 70) {
      return 'B+';
    } else if (numericalValue >= 60) {
      return 'B';
    } else if (numericalValue >= 50) {
      return 'C';
    } else {
      return 'Fail';
    }
  };
  

  useEffect(() => {
    console.log('Results:', results);
    results.forEach((result) => {
      console.log(`Result ID: ${result.resid}, Grade: ${result.grade}`);
    });
  }, [results]);
  const routeBack = () => {
    navigate(-1)
  }
  return (
    <>
    <h1>View Result Details</h1>
    <div className="view-student-container">
      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Sno</th>
              <th>SubjectName</th>
              <th>SubjectName</th>
              <th>SubjectName</th>
              <th>SubjectName</th>
              <th>SubjectName</th>
              <th>SubjectName</th>
              <th>Result</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.resid}>
                 <td>{result.resid}</td>
                <td>{result.res1}</td>
                <td>{result.res2}</td>
                <td>{result.res3}</td>
                <td>{result.res4}</td>
                <td>{result.res5}</td>
                <td>{result.res6}</td>
                <td>{result.grade}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(result.resid)}
                  >
                    <FileEdit color="#0040ff" />
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(result.resid, result.res1)}
                  >
                    <Trash color="#ff0000" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
    <button onClick={routeBack} className='route-btn'><ChevronLeftCircle color="#25db00" /></button>

    </>
  );
}

export default ViewResult;
