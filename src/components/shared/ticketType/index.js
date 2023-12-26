import React from "react";

import "./ticketType.css";

const TicketType = ({ ticketTypeLabel }) => {
  return (
    <div className="ticket-type-base">
      <div className="ticket-type-container">
        <div>
          <div className="ticket-type-color-circle"></div>
        </div>
        <div>{ticketTypeLabel}</div>
      </div>
    </div>
  );
};

export default TicketType;
