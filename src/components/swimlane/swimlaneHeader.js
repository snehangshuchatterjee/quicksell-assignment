import React from "react";
import { getPriorityIcon, getPriorityText } from "../../utils/priorityUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../shared/avatar";
import { faEllipsis, faPlus } from "@fortawesome/free-solid-svg-icons";

const SwimlaneHeader = ({ groupBy, headerText, ticketCount }) => {
  const getHeaderLeftIcon = () => {
    switch (groupBy) {
      case "priority": {
        const priorityId = getKeyByValue(getPriorityText(), headerText);
        
        return <FontAwesomeIcon icon={getPriorityIcon(priorityId)} />;
      }
      case "user": {
        return <Avatar userName={headerText} />;
      }
      default: {
        return <FontAwesomeIcon icon={getPriorityIcon(headerText)} />;
      }
    }
  };

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  return (
    <div className="swimlane-header-base">
      <div className="swimlane-header-base-left">
        <div style={{ flexGrow: 2 }}>{getHeaderLeftIcon()}</div>
        <div
          className="swimlane-header-base-left-header-text"
          style={groupBy === "user" ? { lineHeight: 2 } : {}}
        >
          {headerText}
        </div>
        <div style={groupBy === "user" ? { lineHeight: 2 } : {}}>
          {ticketCount}
        </div>
      </div>
      <div className="swimlane-header-base-right">
        <FontAwesomeIcon icon={faPlus} />
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
    </div>
  );
};

export default SwimlaneHeader;
