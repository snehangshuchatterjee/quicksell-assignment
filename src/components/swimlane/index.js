import React from "react";

import "./swimlane.css";
import SwimlaneHeader from "./swimlaneHeader";

const Swimlane = (props) => {
  const { groupBy, headerText, ticketCount } = props;
  return (
    <div className="swimlane-base">
      <SwimlaneHeader
        groupBy={groupBy}
        headerText={headerText}
        ticketCount={ticketCount}
      />
      <div className="swimlane-container">{props.children}</div>
    </div>
  );
};

export default Swimlane;
