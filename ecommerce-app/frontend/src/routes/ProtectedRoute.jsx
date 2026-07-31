import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
    const { user, loading } = useSelector((state) => state.auth);
    const location = useLocation();

    // Wait until authentication check finishes
    if (loading) {
        return <h2>Loading...</h2>;
    }

    // User is not logged in
    if (!user) {
        return (
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />
        );
    }

    // User is authenticated
    return <Outlet />;
};

export default ProtectedRoute;