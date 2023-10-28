import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSubject, deleteSubject, editSubject, getFeedback } from '../../../service/api';
import { ToastContainer, toast } from 'react-toastify';
import { Trash, FileEdit, PlusCircle } from 'lucide-react';
import { ChevronLeftCircle } from 'lucide-react';

function ViewFeedback() {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    try {
      const response = await getFeedback();
      setFeedbacks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

//   const handleEdit = (feedid) => {
//     navigate(`/admin/subject/edit/${subid}`);
//   };

//   const handleDelete = async (feedid, name) => {
//     try {
//       const res = await deleteSubject(subid);
//       console.log(res.status);
//       if (res.status === 200) {
//         toast.success(`Subjects deleted successfully !`, {
//           position: 'bottom-right',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: 'light',
//         });
//       }
//       fetchFeedbacks();
//     } catch (error) {
//       console.log(error);
//     }
//   };
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
              <th>Name</th>
              <th>Email</th>
              <th>Subjec</th>
              <th>Message</th>
            
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <tr key={feedback.feedid}>
                 <td>{feedback.feedid}</td>
                <td>{feedback.name}</td>
                <td>{feedback.email}</td>
                <td>{feedback.subject}</td>
                <td>{feedback.message}</td>
                
                {/* <td>
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
                </td> */}
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

export default ViewFeedback;
