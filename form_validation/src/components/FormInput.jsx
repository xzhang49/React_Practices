import React from 'react';

import "./formInput.css";

function FormInput(props) {
  return (
    <div className="formInput">
        {/* <label>UserName</label> */}
        <input name={props.name}
            placeholder={props.placeholder}
        />
    </div>
  )
}

export default FormInput