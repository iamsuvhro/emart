import React, { useState } from "react";
import { FcMenu } from "react-icons/fc";
import  {MdOutlineCategory} from "react-icons/md";
import SidebarItems from "./SidebarItems";




export default function Sidebar() {
  return (
    <div className="w-60 h-full shadow-md bg-white px-1 absolute">
      <ul className="relative">
        <SidebarItems Icon={FcMenu} text="Home" to="/home"/>
        <SidebarItems Icon={MdOutlineCategory} text="Category" to="/category"/>
        <SidebarItems Icon={MdOutlineCategory} text="Account Details" to="/account"/>
        <SidebarItems Icon={MdOutlineCategory} text="Settings" to="/settings"/>
      </ul>
    </div>
  );
}
