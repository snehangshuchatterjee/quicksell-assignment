import React from "react";
import Label from "../shared/label";
import Avatar from "../shared/avatar";
import Priority from "../shared/priority";
import TicketType from "../shared/ticketType";

import "./card.css";

const Card = (props) => {
  const { showAvatar, ticketData, userName } = props;

  return (
    <div className="card-base">
      <div className="card-header">
        <Label labelText={ticketData.id} labelStyle="card-id" />
        <Avatar userName={userName} />
      </div>
      <Label labelText={ticketData.title} />
      <div className="card-footer">
        <Priority priority={ticketData.priority.toString()} />
        <TicketType ticketTypeLabel={ticketData.tag[0]} />
      </div>
    </div>
  );
};

export default Card;
