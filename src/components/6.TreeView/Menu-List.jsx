import React from "react";
import MenuItem from "./Menu-Item";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
      {list.map((listItem) => {
        return <MenuItem key={listItem.label} item={listItem} />;
      })}
    </ul>
  );
};

export default MenuList;
