import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../contexts/AuthContext";

export default function StaffRoute() {
    const { user } = useAuth();

    if (user?.role !== 'STAFF') {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}