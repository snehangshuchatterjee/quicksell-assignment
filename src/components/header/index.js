import React from "react";

import "./header.css";
import Avatar from "../shared/avatar";
import Dropdown from "../shared/dropdown";
import { grouping, ordering } from "../../utils/dropdownUtils";

const Header = ({ handleGroupingChange, handleSortingChange }) => {
  return (
    <div className="header-base">
      <div>
        <img
          src="https://dwtqm09zovi8z.cloudfront.net/assets/powered_by.png"
          width={324}
          height={104}
          alt="Logo"
          className="header-logo"
        />
      </div>
      <div className="header-right">
        <div>
          <Dropdown
            name="ordering"
            options={ordering}
            label="Ordering"
            onChange={handleSortingChange}
          />
        </div>
        <div>
          <Dropdown
            name="grouping"
            options={grouping}
            label="Grouping"
            onChange={handleGroupingChange}
          />
        </div>
        <div>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Header;
