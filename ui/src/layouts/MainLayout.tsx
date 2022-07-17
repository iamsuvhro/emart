import React, { useContext } from "react";
import Login from "../pages/auth/Login";
import DefaultLayout from "./DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";

function MainLayout() {
  const AuthStatus = useSelector((state: State) => state.authStatus);
  {
    if (AuthStatus === false) {
      return <Login />;
    } else{
      return <DefaultLayout />;
    }
  }
}

export default MainLayout;
