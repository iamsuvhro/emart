import React, { useState } from "react";
import { authLogin } from "../../state/action-creators";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import { Navigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

export default function CreateAccount() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");

  const stateButton = "disabled";

  function usernameOnchange(e: any) {
    setusername(e.target.value);
  }
  function passwordOnchange(e: any) {
    setpassword(e.target.value);
  }
  function nameOnchange(e: any) {
    setname(e.target.value);
  }
  function emailOnchange(e: any) {
    setemail(e.target.value);
  }
  const [error, seterror] = useState("Enter all the details to create an account");

  const handleSendData = async () => {
    const axios = require("axios");
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    await axios({
      method: "post",
      header: {
        "Content-Type": "'application/json",
      },
      url: "http://localhost:8000/api/user/create-user/",
      data: {
        username: username,
        password: password,
        email: email,
        name: name,
      },
    }).then((response: any) => {
      if (response.data.success === true) {
        seterror("Successfully account created");
        <Navigate to={'/home'}/>
      } else {
        seterror("Failed to create account");
      }
    });
  };

  function validationCheck() {
    if (username.length != 0) {
      if (password.length != 0) {
        if (name.length != 0) {
          if (email.length != 0) {
            return (
              <>
              <button
                type="submit"
                className="text-white ml-80 mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleSendData}
              >
                Create new account
              </button>
              </>
              
            );
          }
        }
      }
    }
  }

  function showLogin() {
      if (error === "Successfully account created") {
          return(
              <p className="mt-4 text-green-300 text-center"><a href="/">Click here to <span>Login</span></a></p>
          )
      }
  }
  return (
    <>
      <div className="p-20 w-1/2 items-center justify-start ml-96 mt-10 pr-6">
        <p className="mb-10 text-4xl text-center">Sign Up</p>
        <p className="mb-10 text-2xl text-center">{error}</p>
        <form className="h-screen">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your username
            </label>
            <input
              type="text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              onChange={usernameOnchange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your name
            </label>
            <input
              type="text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              onChange={nameOnchange}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              onChange={emailOnchange}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your password
            </label>
            <input
              type="password"
              onChange={passwordOnchange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
            
          </div>
          {/* <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Repeat password
            </label>
            <input
              type="password"
              id="repeat-password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
            <p></p>
          </div> */}
          <div>{validationCheck()}</div>
          <div>{showLogin()}</div>
        </form>
      </div>
    </>
  );
}
