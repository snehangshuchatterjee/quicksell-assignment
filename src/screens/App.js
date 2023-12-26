import React, { useEffect, useState } from "react";
import Card from "../components/card";
import Header from "../components/header";
import Swimlane from "../components/swimlane";
import { useFetchTicketsQuery } from "../redux/api/ticketApi";
import { groupTickets, swimlaneHeaders } from "../utils/groupTickets";
import { getPriorityText } from "../utils/priorityUtils";

function App() {
  const [grouping, setGrouping] = useState("status");
  const [sortOrder, setSortOrder] = useState("status");
  const [sortedData, setSortedData] = useState([]);

  const { data, isLoading } = useFetchTicketsQuery();

  useEffect(() => {
    setSortedData(sortData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const sortData = () => {
    let sortedTicketsData = structuredClone(data)?.tickets;

    if (sortOrder === "priority") {
      sortedTicketsData = sortedTicketsData.sort(
        (ticket1, ticket2) => ticket2.priority - ticket1.priority
      );
    } else if (sortOrder === "title") {
      sortedTicketsData = sortedTicketsData.sort((ticket1, ticket2) => {
        if (ticket1.title < ticket2.title) {
          return -1;
        }
        if (ticket1.title > ticket2.title) {
          return 1;
        }
        return 0;
      });
    }

    return sortedTicketsData;
  };

  const handleSortingChange = (event) => {
    const sortBy = event.currentTarget.value;

    setSortOrder(sortBy);
  };

  const handleGroupingChange = (event) => {
    const groupBy = event.currentTarget.value;

    setGrouping(groupBy);
  };

  const getUserName = (users, userId) => {
    return users.find((user) => user.id === userId);
  };

  const getSwimlanes = () => {
    const result = [];
    if (data && Object.keys(data.tickets).length > 0) {
      const actualStructuredData = [...groupTickets(grouping, sortData())];
      const structuredData = new Map(actualStructuredData.sort());

      if (grouping === "user") {
        for (const [key, value] of structuredData.entries()) {
          result.push(
            <Swimlane
              groupBy={grouping}
              headerText={
                grouping === "user"
                  ? data.users[key.split("-")[1] - 1]?.name
                  : grouping === "priority"
                  ? getPriorityText()[key]
                  : key
              }
              ticketCount={value?.length}
            >
              {value.map((ticket) => {
                return (
                  <Card
                    ticketData={ticket}
                    userName={getUserName(data.users, ticket.userId).name}
                  />
                );
              })}
            </Swimlane>
          );
        }
      } else {
        Object.keys(swimlaneHeaders[grouping]).map((headerKey, outerIndex) => {
          result.push(
            <Swimlane
              key={`${headerKey}-${outerIndex}`}
              groupBy={grouping}
              headerText={
                grouping === "priority"
                  ? getPriorityText()[headerKey]
                  : swimlaneHeaders[grouping][headerKey]
              }
              ticketCount={
                grouping === "priority"
                  ? structuredData?.get(parseInt(headerKey))?.length
                  : structuredData?.get(headerKey)?.length
              }
            >
              {[...structuredData.entries()].map((entry) => {
                if (entry[0].toString() === headerKey) {
                  return entry[1].map((ticket, innerIndex) => {
                    return (
                      <Card
                        key={`${headerKey}-${outerIndex}_${innerIndex}`}
                        ticketData={ticket}
                        userName={getUserName(data.users, ticket.userId).name}
                      />
                    );
                  });
                }
              })}
            </Swimlane>
          );
        });
      }

      return result;
    } else {
      return [];
    }
  };

  return (
    <div className="App" style={{ height: "100%" }}>
      <Header
        handleGroupingChange={handleGroupingChange}
        handleSortingChange={handleSortingChange}
      />
      <div
        style={{ display: "flex", flexDirection: "row", overflow: "scroll" }}
      >
        {data?.tickets && getSwimlanes()}
      </div>
    </div>
  );
}

export default App;
