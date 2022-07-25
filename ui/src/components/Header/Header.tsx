import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineShop,
} from "react-icons/ai";
import { authLogout } from "../../state/action-creators";

function Header() {

  function handleLogout() {
    localStorage.removeItem("authStatus")
    authLogout()
    window.location.reload()
  }

  return (
    <div>
      <nav className="bg-white border px-2 sm:px-4 py-6 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/home" className="flex items-center">
            <div className="flex">
              <span className="flex self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                <AiOutlineShop size={32} className="mr-2 text-green-600" />
                E-Mart
              </span>
            </div>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li className="flex gap-4">
                <div className="block py-2 pr-4 pl-3 text-black  rounded md:bg-transparent  md:p-0 dark:text-white hover:text-blue-600">
                  <AiOutlineShoppingCart size={22} />
                </div>
                <div className="block py-2 pr-4 pl-3 text-black  rounded md:bg-transparent  md:p-0 dark:text-white hover:text-blue-600">
                  <AiOutlineHeart size={22} />
                </div>
                <p onClick={handleLogout} className="hover:text-red-500 cursor-pointer">Logout</p>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    </div>
  );
}

export default Header;
