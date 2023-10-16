import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function Signup() {

    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let countryInputRef = useRef();
    let emailInputRef = useRef();
    let dateInputRef = useRef();
    let passwordInputRef = useRef();
    let confirmPasswordInputRef = useRef();
    let numberInputRef = useRef();
    
    let createAccount = ()=>{
    
       if(firstNameInputRef.current.value == 0 &&
        lastNameInputRef.current.value == 0 &&
        passwordInputRef.current.value == 0 &&
        confirmPasswordInputRef.current.value == 0 &&
        numberInputRef.current.value ==0 
        ){
             alert("please fill * require"); 
       }else{
         alert("Successfully created your account"); 
       }
    
    };

return (
    
    <div id='head'>
    <div>
        <form id='signupForm'>

<h2><strong>Create Your <b>2306</b> I'D</strong></h2>
       <h4><b>*</b> indicates a required field.</h4>
           <div>
               <label><strong>First name<b>*</b></strong></label>
               <input ref={firstNameInputRef}></input>
           </div>
           <div>
               <label><strong>Last name<b>*</b></strong></label>
               <input ref={lastNameInputRef}></input>
           </div>
           <div>
               <label><strong>Country<b>*</b></strong></label>
               <select ref={countryInputRef}>
               <option >select..</option>
                   <option value="Aland lslands">Aland lslands</option>
                   <option value=" Belize">Belize</option>
                   <option value="Colombia">Colombia</option>
                   <option value="France">France</option>
                   <option value="Egypt">Egypt</option>
                   <option value="France">France</option>
                   <option value="India">India</option>
               </select>
           </div>
        <div>
                <label><strong>Date of birth<b>*</b></strong></label>
                <input  ref={dateInputRef} id='date' type='date'></input>
            </div>
            <div>
                <label><strong>Email i'd<b>*</b></strong></label>
                <input ref={emailInputRef} type='email'></input>
            </div>
            <div>
                <label><strong>Password<b>*</b></strong></label>
                <input ref={passwordInputRef} type='password'></input>
            </div>
            <div>
                <label><strong> confirm password<b>*</b></strong></label>
                <input ref={confirmPasswordInputRef} type='password'></input>
            </div>
            <div>
                <label><strong>Phone number<b>*</b></strong></label>
                <input ref={numberInputRef} type='number'></input>
                </div>
                <div >
                <input  type='checkbox'></input>
                <label id='captcha'>I agree to the Terms of Service</label>
            </div>
            <button type='button' onClick={()=>{
            createAccount();
           
           }}>Sign up</button>
            <h3>Already have an account? </h3>
            <Link id='login' to="/">Login now </Link>
            <br></br>
            
            </form>
    </div>
    </div>


  )
}

export default Signup