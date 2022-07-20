import React from 'react';
import './form.css'

function Form() {
  return (
    <form className='form'>
        <div className="form_input">
            <input type="text" placeholder='Your Name'/>
        </div>
        <div className="form_input">
            <input type="email" placeholder='Your Name'/>
        </div>
        <div className="form_input">
            <textarea row='10' placeholder='Write Message'></textarea>
        </div>
        <button className='submit_btn' type='submit'>
            submit
        </button>
    </form>
  )
}

export default Form