import React from "react";

import "./avatar.css";

const Avatar = (props) => {
  const { imageURL, userName } = props;

  const getNameInitials = (userName) => {
    const nameParts = userName?.split(" ");

    if (nameParts) {
      if (nameParts?.length > 1) {
        return `${nameParts[0]?.charAt(0).toUpperCase()}${nameParts[1]
          ?.charAt(0)
          .toUpperCase()}`;
      } else {
        return `${nameParts[0]?.charAt(0).toUpperCase()}${nameParts[0]
          ?.charAt(1)
          .toUpperCase()}`;
      }
    }
  };

  return (
    <div className="c-avatar">
      {!userName && (
        <img
          className="c-avatar__image"
          src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
      )}
      {userName && !imageURL && (
        <div className="c-avatar__text">
          {getNameInitials(userName)}
        </div>
      )}
      {/* <span className="c-avatar__status"></span> */}
    </div>
  );
};

export default Avatar;
