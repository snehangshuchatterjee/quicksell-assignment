import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPriorityIcon } from "../../../utils/priorityUtils";

import "./priority.css";

const Priority = ({ priority }) => {
  return (
    <span className="priority-base">
      <FontAwesomeIcon icon={getPriorityIcon(priority)} />
    </span>
  );
};

export default Priority;
