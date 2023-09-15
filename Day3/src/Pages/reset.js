
 import {Link} from "react-router-dom";
 import '../Css/reset.css'
function ResetPassword(){
    return(
        <div className='main'>
        <div className='overlay'>
       
      <div class="wrapper2">
               <div class="title login"><br/><br/>
          <h3>  <center>  RESET PASSWORD</center></h3><br/><br/>
               </div>

        <div class="field2">
            <input type="password" placeholder="New Password" required></input><br/><br/>
            <input type="password" placeholder="Confirm Password"></input><br/><br/>
        </div>
        <div class="reset">
            <input type="submit" value="Reset Password" ></input>
            </div>
        <div class="signup-link" >
           <Link to='/'>
            <input type='button' value="Login">
            </input>
           </Link>
        </div>
</div>
</div>
</div>

    );
    
}
export default ResetPassword;