import React, { useState } from "react";
import { FcMenu } from "react-icons/fc";
import  {MdOutlineCategory, MdManageAccounts,MdOutlineSettings,MdOutlineHome } from "react-icons/md";
import SidebarItems from "./SidebarItems";




export default function Sidebar() {
  return (
    <div className="w-60 h-full shadow-md bg-white px-1 absolute">
      <ul className="relative mt-4">
        <SidebarItems Icon={MdOutlineHome} text="Home" to="/"/>
        <SidebarItems Icon={MdOutlineCategory} text="Category" to="/category"/>
        <SidebarItems Icon={MdManageAccounts} text="Account Details" to="/account"/>
        <SidebarItems Icon={MdOutlineSettings} text="Settings" to="/settings"/>
      </ul>
    </div>
  );
}
