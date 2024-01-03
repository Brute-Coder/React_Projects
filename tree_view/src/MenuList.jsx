import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ menus = [] }) {
  return (
    <ul>
      {menus && menus.length && menus.map((menu) => <MenuItem menu={menu} />)}
    </ul>
  );
}

export default MenuList;
