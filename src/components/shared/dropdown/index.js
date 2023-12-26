import React from "react";

import "./dropdown.css";

const Dropdown = (props) => {
  const { label, name, options, onChange } = props;

  return (
    <div className="dropdown-base">
      {label && <div>{label}: &nbsp;</div>}
      <select name={name} className="dropdown-options-base" onChange={onChange}>
        {options.map((option, index) => (
          <option key={`${option.value}-${index}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
