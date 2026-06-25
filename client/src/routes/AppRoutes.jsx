import { Routes, Route } from "react-router-dom";

import Landing from "../pages/landing/Landing";

import AppLayout from "../layouts/AppLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import AuthLayout from "../layouts/AuthLayout";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";



export default function AppRoutes() {

    return (

        <Routes>
                
            <Route
                path="/"
                element={<Landing />}
            />
            <Route element={<AuthLayout />}>

            <Route
                path="/login"
                element={<Login />}
           />

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/forgot-password"
                element={<ForgotPassword />}
            />

            <Route
                path="/reset-password"
                element={<ResetPassword />}
            />

            </Route>
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