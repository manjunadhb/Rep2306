import React, {  useRef  } from 'react'
import  { useNavigate } from 'react-router-dom';


function Login() {

   
    let emailinputRef = useRef();
    let passwordinputRef = useRef();
     let navigate = useNavigate();

  
        return (
        <div className='App'>
        <form>
            <div>
                <h2>Login Page</h2>
            </div>
           <div>
                <label>Email: </label>
                <input ref={emailinputRef}></input>
            </div>

            <div>
                <label>Password: </label>
                <input ref={passwordinputRef}></input>
            </div>

          <button type="button"
            onClick={()=>{
               
              navigate("/Tollywood")

            }}>(Login)</button>

</form>
        
        </div>
      )
    }
    
    export default Login;


       
   