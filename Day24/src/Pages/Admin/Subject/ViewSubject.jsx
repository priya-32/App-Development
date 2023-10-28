import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSubject, deleteSubject, editSubject } from '../../../service/api';
import { ToastContainer, toast } from 'react-toastify';
import { Trash, FileEdit, PlusCircle } from 'lucide-react';
import { ChevronLeftCircle } from 'lucide-react';

function ViewSubject() {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);

  const fetchSubjects = async () => {
    try {
      const response = await getSubject();
      setSubjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  const handleEdit = (subid) => {
    navigate(`/admin/subject/edit/${subid}`);
  };

  const handleDelete = async (subid, subject1) => {
    try {
      const res = await deleteSubject(subid);
      console.log(res.status);
      if (res.status === 200) {
        toast.success(`Subjects deleted successfully !`, {
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
      fetchSubjects();
    } catch (error) {
      console.log(error);
    }
  };
  const routeBack = () => {
    navigate(-1)
  }
  return (
    <>
    <h1>View Subject Details</h1>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.subid}>
                 <td>{subject.subid}</td>
                <td>{subject.subject1}</td>
                <td>{subject.subject2}</td>
                <td>{subject.subject3}</td>
                <td>{subject.subject4}</td>
                <td>{subject.subject5}</td>
                <td>{subject.subject6}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(subject.subid)}
                  >
                    <FileEdit color="#0040ff" />
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(subject.subid, subject.subject1)}
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

export default ViewSubject;
