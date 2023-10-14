import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  
    let nameInputRef = useRef();
    let familyNameInputRef = useRef();
    let emailIdInputRef = useRef();
    let pwInputRef = useRef();
    let phoneNumberInputRef = useRef();
     let navigate = useNavigate();

    let createAccount = ()=>{

        if( nameInputRef.current.value ==0 && 
            familyNameInputRef.current.value ==0 &&
        emailIdInputRef.current.value ==0 &&
        pwInputRef.current.value ==0 &&
        phoneNumberInputRef.current.value ==0 
        ){
        alert("please fill * require");
        }else{
           
         navigate("/Home")
        }

    };
   
    

  return (
    <div id='container'>
    <div>
        <form>
            <h1>Log in for <b>2306</b> I'D</h1>
            <div>
                <label><strong>First name</strong><b>*</b></label>
                <input ref={nameInputRef}></input>
            </div>
            <div>
                <label><strong>Last name</strong><b>*</b></label>
                <input ref={familyNameInputRef}></input>
            </div>
           
            <div>
                <label><strong>Email I'd</strong><b>*</b></label>
                <input ref={emailIdInputRef}></input>
            </div>
            <div>
                <label><strong>Password</strong><b>*</b></label>
                <input ref={pwInputRef}  type='password'></input>
            </div>
            <div>
                <label><strong>Contact number</strong><b>*</b></label>
                <input ref={phoneNumberInputRef} type='number'></input>

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