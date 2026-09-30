export default function Footer() {
    return (
        <footer className="bg-onyx py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-tuscan-sun/20 rounded-lg flex items-center justify-center">
                                <i className="bi bi-globe-americas text-tuscan-sun text-lg"></i>
                            </div>
                            <span className="text-lg font-semibold text-white">PathTrip</span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Nền tảng đặt tour du lịch nội địa hàng đầu Việt Nam. Hành trình đúng,
                            trải nghiệm đáng.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Dịch vụ</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/tours" className="text-white/50 text-sm hover:text-tuscan-sun transition-colors">
                                    Tours du lịch
                                </Link>
                            </li>
                            <li>
                                <Link to="/hotels" className="text-white/50 text-sm hover:text-tuscan-sun transition-colors">
                                    Đặt khách sạn
                                </Link>
                            </li>
                            <li>
                                <Link to="/transport" className="text-white/50 text-sm hover:text-tuscan-sun transition-colors">
                                    Vé máy bay
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Hỗ trợ</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/faq" className="text-white/50 text-sm hover:text-tuscan-sun transition-colors">
                                    Câu hỏi thường gặp
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-white/50 text-sm hover:text-tuscan-sun transition-colors">
                                    Điều khoản sử dụng
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-white/50 text-sm hover:text-tuscan-sun transition-colors">
                                    Chính sách bảo mật
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Liên hệ</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-white/50 text-sm">
                                <i className="bi bi-telephone text-tuscan-sun"></i>
                                <span>1900 1234</span>
                            </li>
                            <li className="flex items-center gap-2 text-white/50 text-sm">
                                <i className="bi bi-envelope text-tuscan-sun"></i>
                                <span>support@pathtrip.vn</span>
                            </li>
                            <li className="flex items-center gap-2 text-white/50 text-sm">
                                <i className="bi bi-geo-alt text-tuscan-sun"></i>
                                <span>123 Nguyễn Huệ, Q1, TP.HCM</span>
                            </li>
                        </ul>
                        <div className="flex gap-3 mt-4">
                            <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-tuscan-sun/20 transition-colors">
                                <i className="bi bi-facebook text-white"></i>
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-tuscan-sun/20 transition-colors">
                                <i className="bi bi-instagram text-white"></i>
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-tuscan-sun/20 transition-colors">
                                <i className="bi bi-youtube text-white"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-white/40 text-sm">© 2026 PathTrip. Tất cả quyền được bảo lưu.</p>
                </div>
            </div>
        </footer>
    )
}