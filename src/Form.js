import React from 'react'
import Test from './Test'

const Form = () => {
  return (
    <>
    <Test/>
    <form>
        <label htmlFor='firstname'>FirstName</label>
        <br/>
        <input type='text' id='firstname' placeholder='enter your name'/>
        <br/>
        <label htmlFor='lastname'>LastName</label>
        <br/>
        <input type='text' id='lastname' placeholder='enter your lastname'/>
        <br/>
        <label htmlFor='email'>Email</label>
        <br/>
        <input type='email' id='email' placeholder='abc@gmail.com'/>
        <br/>
        <label htmlFor='password'>Password</label>
        <br/>
        <input type='password' id='password' placeholder='password'/>
        <br/>
        <label htmlFor='gender'>Gender</label>
        <br/>
        <input type='radio' name='gender' id='male' value='male'/>Male
        <input type='radio' name='gender' id='female' value='female'/>FeMale
        <input type='radio' name='gender' id='other' value='Other'/>Other
        <br/>
        <button type='submit'>Submit</button>

    </form>
    </>
  )
}

export default Form