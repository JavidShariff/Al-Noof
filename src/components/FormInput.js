import React, { useState } from "react";
import "./FormInput.css";
const FormInput = (props) => {
  const { label, id, onchange, value, ...inputprops } = props;
  const [focused, setFocused] = useState(false);
  const Handlefocused = (e) => {
    setFocused(true);
  };
  return (
    <div className="FormInput">
      <label>{label}</label>
      <input
        {...inputprops}
        onChange={onchange}
        required
        onBlur={Handlefocused}
        onFocus={()=>inputprops.name === "conformpassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{inputprops.errormessage}</span>
    </div>
  );
};

export default FormInput;
