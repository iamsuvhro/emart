import React, { useContext } from "react";
import Login from "../pages/auth/Login";
import DefaultLayout from "./DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function MainLayout() {
  // const AuthStatus = useSelector((state: State) => state.authStatus);
  // if (AuthStatus === true) {
  //   return <Login />;
  // } else {
  //   return <DefaultLayout/>;
  // }
  return(
    <DefaultLayout/>
  )
}

export default MainLayout;
