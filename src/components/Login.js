import React from 'react'

function Login() {
  return (
    <div>
        <form>
            <h1>Create an account for <b>2306</b></h1>
            <div>
                <label><strong>First name</strong><b>*</b></label>
                <input></input>
            </div>
            <div>
                <label><strong>Last name</strong><b>*</b></label>
                <input></input>
            </div>
            <div>
                <label><strong>Email I'd</strong><b>*</b></label>
                <input></input>
            </div>
            <div>
                <label><strong>Password</strong><b>*</b></label>
                <input type='password'></input>
            </div>
            <div>
                <label><strong>Contact number</strong><b>*</b></label>
                <input></input>

            </div>
            <div>
                <input type='checkbox'></input>
                <label><strong>Remember me.</strong></label>
                </div>
                <div>
                   
                    <button type='button' onClick={()=>{
alert("Created account successfully.")

                    }}>Continue</button>

                </div>
            <h3>Already have an account? </h3>
        </form>
        <h2 id='info'>Sign in<b>'</b> or create an account<b>?</b></h2>
    </div>
  )
}

export default Login