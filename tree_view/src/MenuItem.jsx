import React from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

function MenuItem({ menu = {} }) {
  const [displayCurr, setDisplayCurr] = React.useState({});

  function handleToggle(label) {
    setDisplayCurr({ ...displayCurr, [label]: !displayCurr[label] });
  }
  return (
    <li>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          cursor: "default",
          color: "#fff",
        }}
      >
        <p>{menu.label}</p>
        {menu.children && menu.children.length > 0 ? (
          <span
            onClick={() => handleToggle(menu.label)}
            style={{ cursor: "pointer" }}
          >
            {displayCurr[menu.label] ? (
              <FaMinus size={15} />
            ) : (
              <FaPlus color="#FFF" size={15} />
            )}
          </span>
        ) : null}
      </div>
      {menu &&
      menu.children &&
      menu.children.length > 0 &&
      displayCurr[menu.label] ? (
        <MenuList menus={menu.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
