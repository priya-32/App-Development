
import {Link} from "react-router-dom";
import '../Css/login.css'
function Login(){
    return(
      <div className='main1'>
        <div className='overlay'>
       
      <div className='wrapper'>
      <div className="first">
        <br/>
        <h3>STUDENT RESULT MANAGEMENT</h3><br/><br/>
        <form>
      <div className="first-input">
        <div class="email">
      <input type="email" placeholder="Email Address" />
      </div>
      </div>
      <div className="second-input">
        <div class="email">
      <input type="password" placeholder="Password" ></input>
      </div>
      </div>
      <br/><br/>
      </form>
      <div className='btn'>
      <div className='forget'>
      <Link to='/forget'>Forgot Password ?</Link>
      <div className='btn-layer'>
      <div className='login' >
      <Link to='/MainPage'>
       <input type="button" value="Login"/>
      </Link>
      </div>
      </div><br/><br/><br/><br/>
      </div>
      </div>
      <div className='account'>
      <br/>
        <b>I&nbsp;&nbsp;don't&nbsp;&nbsp;have&nbsp;&nbsp;an&nbsp;&nbsp;account&nbsp;&nbsp;yet</b>
      </div><br/>
      <div className='create'>
        <div className='acc'>
        <Link to ='/signup'>
       <input type="button" value="Create an account" >
        </input>
        </Link>
        </div>
        </div>
</div>
        </div>
        </div>
      </div>
    )
}
export default Login;