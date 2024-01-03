import React from "react";
import menus from "./Data";
import MenuList from "./MenuList";
function TreeView() {
  return (
    <div>
      <MenuList menus={menus} />
    </div>
  );
}

export default TreeView;
