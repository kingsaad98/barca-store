import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size, history }) => {
  return (
    <div
      onClick={() => history.push(`/shop/${title}`)}
      className={`${size} menu-item`}
    >
      <div
        className="background-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);