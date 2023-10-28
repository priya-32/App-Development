import axios from "axios";
import { useEffect } from "react";


let jwtToken = localStorage.getItem('Token')

console.log(jwtToken)
// conso
const authheader = `Bearer ${jwtToken}`;
const headers = {
  'Authorization': authheader,
  'Content-Type': 'application/json',
};


const URI = 'http://localhost:8181'


const userLogin = (signin) => axios.post(`${URI}/auth/login`, signin)
const userRegister = (register) => axios.post(`${URI}/auth/register`, register)

//dashboard

const getStudentCount = () => axios.get(`${URI}/student/getCount`, { headers })
const getResultCount = () => axios.get(`${URI}/result/getCountRes`, { headers })
const getSubjectCount = ()=> axios.get(`${URI}/order/getCount`, { headers })
const getFeedbackCount = ()=> axios.get(`${URI}/feedback/getCountFeed`, { headers })

//endpoint1 student

const getStudent = () => axios.get(`${URI}/student/get`, { headers })
const getStudentbyId = (sid) => axios.get(`${URI}/student/find/${sid}`, { headers })
const addStudent = (student) => axios.post(`${URI}/student/add`, student, { headers })
const editStudent = (sid, student) => axios.put(`${URI}/student/edit/${sid}`, student, { headers })
const deleteStudent = (sid) => axios.delete(`${URI}/student/delete/${sid}`, { headers })

//endpoint2 student

const getSubject = () => axios.get(`${URI}/subject/getSub`, { headers })
const getSubjectbyId = (subid) => axios.get(`${URI}/subject/findSub/${subid}`, { headers })
const addSubject = (subject) => axios.post(`${URI}/subject/addSub`, subject, { headers })
const editSubject = (subid, subject) => axios.put(`${URI}/subject/editSub/${subid}`, subject, { headers })
const deleteSubject = (subid) => axios.delete(`${URI}/subject/deleteSub/${subid}`, { headers })

//endpoint3 result

const getResult = () => axios.get(`${URI}/result/getRes`, { headers })
const getResultbyId = (resid) => axios.get(`${URI}/result/findRes/${resid}`, { headers })
const addResult = (result) => axios.post(`${URI}/result/addRes`, result, { headers })
const editResult = (resid, result) => axios.put(`${URI}/result/editRes/${resid}`, result, { headers })
const deleteResult = (resid) => axios.delete(`${URI}/result/deleteRes/${resid}`, { headers })


//endpoint4 result

const getFeedback = () => axios.get(`${URI}/feedback/getFeed`, { headers })
const getFeedbackbyId = (feedid) => axios.get(`${URI}/feedback/findFeed/${feedid}`, { headers })
const addFeedback = (feedback) => axios.post(`${URI}/feedback/addFeed`, feedback, { headers })
const editFeedback = (feedid, feedback) => axios.put(`${URI}/feedback/editFeed/${feedid}`, feedback, { headers })
const deleteFeedback = (feedid) => axios.delete(`${URI}/feedback/deleteFeed/${feedid}`, { headers })

export {userLogin , userRegister, getStudentCount , getResultCount , getSubjectCount ,  getFeedbackCount , addStudent , getStudent , getStudentbyId   , deleteStudent,editStudent , addSubject , getSubject , getSubjectbyId   , deleteSubject,editSubject , addResult , getResult , getResultbyId   , deleteResult,editResult , addFeedback , getFeedback , getFeedbackbyId   , deleteFeedback,editFeedback }