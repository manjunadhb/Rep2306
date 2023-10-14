import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
        <form>

<h2><strong>Create Your <b>2306</b> I'D</strong></h2>
       <h4><b>*</b> indicates a required field.</h4>
           <div>
               <label><strong>First name<b>*</b></strong></label>
               <input ></input>
           </div>
           <div>
               <label><strong>Last name<b>*</b></strong></label>
               <input ></input>
           </div>
           <div>
               <label><strong>Country<b>*</b></strong></label>
               <select >
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
                <input  id='date' type='date'></input>
            </div>
            <div>
                <label><strong>Email i'd<b>*</b></strong></label>
                <input  type='email'></input>
            </div>
            <div>
                <label><strong>Password<b>*</b></strong></label>
                <input  type='password'></input>
            </div>
            <div>
                <label><strong> confirm password<b>*</b></strong></label>
                <input  type='password'></input>
            </div>
            <div>
                <label><strong>Phone number<b>*</b></strong></label>
                <input type='number'></input>
                </div>
                <div >
                <input  type='checkbox'></input>
                <label id='captcha'>I agree to the Terms of Service</label>
            </div>
            <button type='button'>Sign up</button>
            <h3>Have an account? </h3>
            <Link id='login' to="/">Log in now</Link>
            <br></br>
            <br></br>
            </form>
    </div>
  )
}

export default Signup