import { Routes, Route } from "react-router-dom";

import Landing from "../pages/landing/Landing";

import AppLayout from "../layouts/AppLayout";
import Dashboard from "../pages/dashboard/Dashboard";

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