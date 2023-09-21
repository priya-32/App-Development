import AdminBar from "../Components/AdminBar";

import Logout from "./Logout";
const Admin = () => {
    return(
        <div className="Admin-Wrapper">
           <AdminBar>
           <Logout/>
           <h1>Admin!!</h1>
           </AdminBar>
           
           
          
        </div>
    )
}
export default Admin;