import React, { useState } from "react";
import { IconType } from "react-icons/lib";
import { NavLink, useMatch } from "react-router-dom";
import { useLocation } from "react-router-dom";
interface Props {
  to: string;
  text: string;
  Icon: IconType;
}

const SidebarItems = ({ to, text, Icon }: Props) => {
  const isActive = useMatch(encodeURI(to));
  return (
    <NavLink to={to}>
      <li
        className={`relative flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out ${
          isActive ? "text-gray-900 bg-gray-100" : "text-gray-700 bg-white"
        }`}
      >
        <div className="flex grid-cols-2 gap-2 items-center">
          <Icon />
          <span>{text}</span>
        </div>
      </li>
    </NavLink>
  );
};

export default SidebarItems;
