import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CreateAccount from "./pages/auth/CreateAccount";

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/*" element={<MainLayout />} />
          <Route path="create-account/" element={<CreateAccount />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
