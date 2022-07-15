import React, { lazy, Suspense } from "react";
import { Router } from "react-router";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Header = lazy(() => import("../components/Header/Header"));
const Sidebar = lazy(() => import("../components/Sidebar/Sidebar"));
const Homepage = lazy(() => import("../pages/Home"));
const Category = lazy(() => import("../pages/Category/Category"));
const Settings = lazy(() => import("../pages/Settings/SettingsPage"));
const Account = lazy(() => import("../pages/Account/AccountPage"));

export default function DefaultLayout() {
  return (
    <>
      <div
        className="layout relative flex flex-col w-full"
        style={{
          minHeight: "100vh",
        }}
      >
        <Header />
        <main className="main flex-1 w-full flex flex-col">
          <Sidebar />
          <div
            className={`page-wrapper w-full flex-1 flex flex-col pt-14 
            pl-56"
          `}
          >
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/home" element={<Homepage />} />
                <Route path="/category" element={<Category />} />
                <Route path="/account" element={<Account />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Suspense>
          </div>
        </main>
      </div>
    </>
  );
}
