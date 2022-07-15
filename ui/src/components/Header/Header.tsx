import React from "react";
import {FcMenu} from "react-icons/fc";

function Header() {

  return (
    <div>
      <nav className="bg-gray-200 border-gray-200 px-2 sm:px-4 py-6 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/home" className="flex items-center">
            <div className="flex">
              
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" >
                E-Mart
              </span>
            </div>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
