import { Link } from "react-router-dom";
import useAuth from "../contexts/AuthContext";
import Logo from "../assets/logo.svg";

export default function Header() {
    const { user } = useAuth();
    return (
        <header className="bg-onyx sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src={Logo} alt="PathTrip" className="w-9 h-9 object-contain" />
                        <span className="text-lg font-semibold text-white">PathTrip</span>
                    </Link>

                    {/* Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-white font-medium hover:text-tuscan-sun transition-colors">
                            Trang chủ
                        </Link>
                        <Link to="/tours" className="text-white/70 hover:text-tuscan-sun transition-colors">
                            Tours
                        </Link>
                        <Link to="/about" className="text-white/70 hover:text-tuscan-sun transition-colors">
                            Giới thiệu
                        </Link>
                        <Link to="/contact" className="text-white/70 hover:text-tuscan-sun transition-colors">
                            Liên hệ
                        </Link>
                    </nav>

                    {/* Actions */}
                    {user ? (
                        <div className="flex items-center gap-3">
                            <Link
                                to="/notifications"
                                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors relative"
                            >
                                <i className="bi bi-bell text-white/80"></i>
                                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-error rounded-full text-[10px] text-white flex items-center justify-center font-bold">2</span>
                            </Link>
                            <Link to="/profile" className="flex items-center gap-2 pl-2 border-l border-white/20 hover:opacity-80 transition-opacity">
                                <div className="w-8 h-8 rounded-full bg-tuscan-sun/20 overflow-hidden">
                                    <img
                                        src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || user.email)}&background=EEC643&color=141414&bold=true`}
                                        alt={user.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-white text-sm font-medium max-w-[120px] truncate">
                                    {user.name || user.email}
                                </span>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Link
                                to="/login"
                                className="px-4 py-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
                            >
                                Đăng nhập
                            </Link>
                            <Link
                                to="/register"
                                className="px-4 py-2 bg-tuscan-sun text-onyx font-medium rounded-lg hover:bg-tuscan-sun-dark transition-colors text-sm"
                            >
                                Đăng ký
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>

    )
}