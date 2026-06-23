import { Routes, Route } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import Dashboard from "../pages/dashboard/Dashboard";

function Landing() {

  return (

    <div className="flex items-center justify-center h-screen text-5xl font-bold">

      🚀 TaskFlow Landing Page

    </div>

  );

}

export default function AppRoutes() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Landing />}
      />

      <Route
        path="/app"
        element={<AppLayout />}
      >

        <Route
          index
          element={<Dashboard />}
        />

      </Route>

    </Routes>

  );

}