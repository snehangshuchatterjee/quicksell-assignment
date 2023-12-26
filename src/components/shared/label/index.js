import React from "react";

const Label = (props) => {
  const { labelText, labelStyle } = props;

  return <span className={labelStyle}>{labelText}</span>;
};

export default Label;
