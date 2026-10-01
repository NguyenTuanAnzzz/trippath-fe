import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { SidebarAdmin } from "../enums/SidebarAdmin";
import { SidebarStaff } from "../enums/SidebarStaff";
import useAuth from "../contexts/AuthContext";

export default function DashboardLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const {user} = useAuth();
    
    // Tính toán trực tiếp không cần useState/setMenu để tránh lỗi infinite re-render
    // Phân chia menu theo role của user
    const menu = user?.role === "ADMIN" 
        ? SidebarAdmin 
        : user?.role === "STAFF" 
            ? SidebarStaff 
            : [];
            
    return (
        <div className="flex min-h-screen bg-platinum">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 p-6">
                <div className="mb-8 flex items-center gap-3">
                    <button 
                        onClick={() => navigate('/profile')} 
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        title="Về Profile"
                    >
                        <i className="bi bi-arrow-left text-gray-600"></i>
                    </button>
                    <div>
                        <h1 className="text-xl font-bold text-tuscan-sun">PathTrip</h1>
                        <p className="text-xs text-gray-400">Admin Dashboard</p>
                    </div>
                </div>

                <nav className="space-y-2">
                    {menu.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <div
                                key={item.id}
                                onClick={() => item.path && navigate(item.path)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${isActive
                                    ? 'bg-tuscan-sun/10 text-tuscan-sun font-medium'
                                    : 'hover:bg-platinum text-gray-500 hover:text-onyx'
                                    }`}
                            >
                                <i className={`${item.icon} text-lg`}></i>
                                <span>{item.title}</span>
                                {item.badge && (
                                    <span className="ml-auto px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">{item.badge}</span>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </aside>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    )
}