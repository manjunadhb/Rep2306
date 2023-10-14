import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function Login() {

  
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let emailInputRef = useRef();
    let passwordNameInputRef = useRef();
    let countryInputRef = useRef();
    let numberInputRef = useRef();


    let createAccount = ()=>{

        if( firstNameInputRef.current.check == "" && 
        lastNameInputRef.current.check == "" &&
        emailInputRef.current.check == ""&&
        passwordNameInputRef.current.check == ""&&
        countryInputRef.current.check== ""&&
        numberInputRef.current.check ==""
        ){
            alert("please fill * require");
          }else{
            alert("Successfully created account");
        }

    };
   
    

  return (
    <div id='container'>
    <div>
        <form>
            <h1>Log in for <b>2306</b> I'd</h1>
            <div>
                <label><strong>First name</strong><b>*</b></label>
                <input ref={firstNameInputRef}></input>
            </div>
            <div>
                <label><strong>Last name</strong><b>*</b></label>
                <input ref={lastNameInputRef}></input>
            </div>
           
            <div>
                <label><strong>Email I'd</strong><b>*</b></label>
                <input ref={emailInputRef}></input>
            </div>
            <div>
                <label><strong>Password</strong><b>*</b></label>
                <input ref={passwordNameInputRef}  type='password'></input>
            </div>
            <div>
                <label><strong>Contact number</strong><b>*</b></label>
                <input ref={numberInputRef} type='number'></input>

            </div>
            <div>
                <input type='checkbox'></input>
                <label><strong>Remember me.</strong></label>
                </div>
                <div>
                   
                    <button type='button' onClick={()=>{
                   createAccount();

                    }}>Continue</button>

                </div>
            <h3>Don't have an account? </h3>
            <Link id='signup' to="/Signup">Sign up</Link>
            <br></br>
            <br></br> 
        </form>
        <h2 id='info'>Sign in<b>'</b> or create an account<b>?</b></h2>
        
    </div>
    </div>
  )
}

export default Login