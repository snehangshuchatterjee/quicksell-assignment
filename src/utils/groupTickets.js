const groupBy = (list, keyGetter) => {
  if (list) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  } else {
    return [];
  }
};

const groupTicketsByStatus = (tickets) => {
  return groupBy(tickets, (ticket) => ticket.status);
};

const groupTicketsByUser = (tickets) => {
  return groupBy(tickets, (ticket) => ticket.userId);
};

const groupTicketsByPriority = (tickets) => {
  return groupBy(tickets, (ticket) => ticket.priority);
};

export const groupTickets = (groupBy, tickets) => {
  switch (groupBy) {
    case "priority": {
      return groupTicketsByPriority(tickets);
    }
    case "user": {
      return groupTicketsByUser(tickets);
    }
    default: {
      return groupTicketsByStatus(tickets);
    }
  }
};

export const swimlaneHeaders = {
  priority: {
    "0": "No Priority",
    "1": "Low",
    "2": "Medium",
    "3": "High",
    "4": "Urgent",
  },
  status: {
    Backlog: "Backlog",
    Todo: "To Do",
    "In progress": "In Progress",
    Done: "Done",
    Completed: "Completed",
  },
};
