
import { Link } from 'react-router-dom';
import '../Css/forget.css'
function Forgott(){
    return(
        <div className='main'>
      <div className='overlay'>
    
      <div class="wrapper1">
               <div class="title-login">
          <h4>FORGOT PASSWORD</h4>
               </div>
               <br/>
               <br/>
               <div class="rep">
                <div class="registered email">
                   Enter your registered email to reset your password
                </div>
               </div>
               <br/>  <br/>  
        <br/>
    <form>
<div class="form-inner">
        <div class="field">
            <input type="email" placeholder="Email Address" required>
                </input>
        </div>
        </div>
        <br/>  
        <div class="form-inner1">
        <div class="field-btn">
        <br/>
           <Link to='/reset'>
            <input type="button" value="Reset Password">
            </input>
            </Link>
            </div>
            </div>
                <div class="prep">
                    <div class="already-acc">
                       <h4>Already have an account?</h4>
                    </div>
                </div> 
                <div class="field-btn1">
         <Link to = '/'>
        <input type="button" value="Login">
        </input>
        </Link>
         </div>
    </form>
</div>
</div>
</div>


    );
    
}
export default Forgott;