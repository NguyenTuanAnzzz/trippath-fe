import { Link, Outlet, useLocation } from "react-router-dom";
import { getUtilities } from "../enums/QuickLink";
import useAuth from "../contexts/AuthContext";

export default function ProfileLayout() {

    const location = useLocation();
    const { user } = useAuth();
    const utilities = getUtilities(user?.role);

    return (
        <div>
            {/* Page Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Left - Quick Actions */}
                    <div className="space-y-6">
                        {/* Quick Stats */}
                        <div className="bg-white rounded-2xl p-6">
                            <h3 className="font-semibold text-onyx mb-4">Thống kê</h3>
                            <div className="space-y-4">
                                <div className="flwex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-tuscan-sun/10 rounded-lg flex items-center justify-center">
                                            <i className="bi bi-airplane text-tuscan-sun"></i>
                                        </div>
                                        <div>
                                            <div className="text-lg font-semibold text-onyx">12</div>
                                            <div className="text-xs text-gray-400">Tour đã đặt</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-tuscan-sun/10 rounded-lg flex items-center justify-center">
                                            <i className="bi bi-heart text-tuscan-sun"></i>
                                        </div>
                                        <div>
                                            <div className="text-lg font-semibold text-onyx">5</div>
                                            <div className="text-xs text-gray-400">Tour yêu thích</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-tuscan-sun/10 rounded-lg flex items-center justify-center">
                                            <i className="bi bi-star text-tuscan-sun"></i>
                                        </div>
                                        <div>
                                            <div className="text-lg font-semibold text-onyx">4.8</div>
                                            <div className="text-xs text-gray-400">Đánh giá trung bình</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Utilities */}
                        <div className="bg-white rounded-2xl p-6">
                            <h3 className="font-semibold text-onyx mb-4">Tiện ích</h3>
                            <div className="space-y-2">
                                {utilities.map((item) => {
                                    const isActive = location.pathname === item.path;
                                    return (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                                                isActive 
                                                    ? 'bg-tuscan-sun/10 shadow-sm' 
                                                    : 'hover:bg-platinum hover:-translate-y-0.5'
                                            }`}
                                        >
                                            <i className={`${item.icon} ${isActive ? 'text-tuscan-sun' : 'text-gray-400'}`}></i>
                                            
                                            <span className={`text-sm ${isActive ? 'text-tuscan-sun font-semibold' : 'text-onyx'}`}>
                                                {item.label}
                                            </span>

                                            {item.badge ? (
                                                <span className="ml-auto px-2 py-0.5 bg-error text-white text-xs rounded-full">
                                                    {item.badge}
                                                </span>
                                            ) : (
                                                <i className={`bi bi-chevron-right text-xs ml-auto transition-transform ${
                                                    isActive ? 'text-tuscan-sun translate-x-1' : 'text-gray-300'
                                                }`}></i>
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                    {/* Main Content - Profile Page */}
                    <div className="lg:col-span-3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}