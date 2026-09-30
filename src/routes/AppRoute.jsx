import { Route, Routes } from "react-router";
import RegisterPage from "../pages/RegisterPage";
import OtpPage from "../pages/OtpPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import HomeLayout from "../layouts/HomeLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import ProtectRoute from "./ProtectRoute";
import AdminRoute from "./AdminRoute";
import StaffRoute from "./StaffRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import OverviewPage from "../pages/admin/OverviewPage";

export default function AppRoute() {
    return (
        <Routes>
            <Route path="register" element={<RegisterPage />} />
            <Route path="verify-email" element={<OtpPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route element={<ProtectRoute />}>
                <Route element={<HomeLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="profile" element={<ProfileLayout />} >
                        <Route index element={<ProfilePage />} />
                    </Route>
                </Route>
                <Route element={<DashboardLayout />}>
                    {/* Route dành riêng cho Admin */}
                    <Route element={<AdminRoute />}>
                        <Route path="admin" element={<OverviewPage />} />
                    </Route>
                    
                    {/* Route dành riêng cho Staff */}
                    <Route element={<StaffRoute />}>
                        <Route path="staff" element={<OverviewPage />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
}