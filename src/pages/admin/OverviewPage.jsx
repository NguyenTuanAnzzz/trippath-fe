export default function OverviewPage() {

    return (

        <main className="flex-1 p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-onyx">Tổng quan</h1>
                    <p className="text-gray-500 mt-1">Xem nhanh tình trạng hệ thống</p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="relative p-2 rounded-lg hover:bg-white transition-colors">
                        <i className="bi bi-bell text-xl text-gray-500"></i>
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-tuscan-sun/20 flex items-center justify-center">
                            <i className="bi bi-person text-tuscan-sun"></i>
                        </div>
                        <div>
                            <div className="font-medium text-onyx text-sm">Admin</div>
                            <div className="text-xs text-gray-400">Quản trị viên</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-tuscan-sun/10 rounded-xl flex items-center justify-center">
                            <i className="bi bi-airplane text-tuscan-sun text-xl"></i>
                        </div>
                        <span className="text-xs text-green-500 font-medium">+5</span>
                    </div>
                    <div className="text-3xl font-bold text-onyx mb-1">48</div>
                    <div className="text-sm text-gray-400">Tour đang hoạt động</div>
                </div>

                <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <i className="bi bi-calendar-check text-blue-500 text-xl"></i>
                        </div>
                        <span className="text-xs text-blue-500 font-medium">Mới</span>
                    </div>
                    <div className="text-3xl font-bold text-onyx mb-1">23</div>
                    <div className="text-sm text-gray-400">Booking mới tuần này</div>
                </div>

                <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                            <i className="bi bi-currency-dollar text-green-500 text-xl"></i>
                        </div>
                        <span className="text-xs text-green-500 font-medium">+18%</span>
                    </div>
                    <div className="text-3xl font-bold text-onyx mb-1">156M</div>
                    <div className="text-sm text-gray-400">Doanh thu tháng</div>
                </div>

                <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                            <i className="bi bi-people text-yellow-500 text-xl"></i>
                        </div>
                    </div>
                    <div className="text-3xl font-bold text-onyx mb-1">8</div>
                    <div className="text-sm text-gray-400">Nhân viên đang hoạt động</div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Bookings */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-onyx">Booking gần đây</h2>
                        <span className="text-sm text-tuscan-sun hover:underline cursor-pointer">Xem tất cả</span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
                            <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200" alt="Tour" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-medium text-onyx">Du lịch Đà Lạt 4N3Đ</h4>
                                <p className="text-sm text-gray-400">Nguyễn Văn A - 15/10/2024</p>
                                <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">Chờ xử lý</span>
                            </div>
                            <div className="text-right">
                                <div className="font-semibold text-onyx">5,990,000đ</div>
                                <span className="text-sm text-tuscan-sun hover:underline cursor-pointer">Chi tiết</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
                            <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=200" alt="Tour" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-medium text-onyx">Khám phá Phú Quốc</h4>
                                <p className="text-sm text-gray-400">Trần Thị B - 16/10/2024</p>
                                <span className="inline-block mt-1 px-2 py-0.5 bg-yellow-100 text-yellow-600 text-xs rounded-full">Đang liên hệ</span>
                            </div>
                            <div className="text-right">
                                <div className="font-semibold text-onyx">8,500,000đ</div>
                                <span className="text-sm text-tuscan-sun hover:underline cursor-pointer">Chi tiết</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
                            <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200" alt="Tour" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-medium text-onyx">Nha Trang Biển Xanh</h4>
                                <p className="text-sm text-gray-400">Lê Văn C - 17/10/2024</p>
                                <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-600 text-xs rounded-full">Đã xác nhận</span>
                            </div>
                            <div className="text-right">
                                <div className="font-semibold text-onyx">6,200,000đ</div>
                                <span className="text-sm text-tuscan-sun hover:underline cursor-pointer">Chi tiết</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SLA Alerts */}
                <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-onyx">Cảnh báo SLA</h2>
                        <span className="w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 border border-red-200 bg-red-50 rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                                <i className="bi bi-exclamation-circle text-red-500"></i>
                                <span className="font-medium text-onyx text-sm">Booking #1234</span>
                            </div>
                            <p className="text-xs text-gray-500">Treo 3 giờ 24 phút - chưa ai nhận</p>
                            <button className="mt-2 text-xs text-tuscan-sun hover:underline">Gán nhân viên</button>
                        </div>

                        <div className="p-4 border border-red-200 bg-red-50 rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                                <i className="bi bi-exclamation-circle text-red-500"></i>
                                <span className="font-medium text-onyx text-sm">Booking #1235</span>
                            </div>
                            <p className="text-xs text-gray-500">Treo 2 giờ 15 phút - chưa ai nhận</p>
                            <button className="mt-2 text-xs text-tuscan-sun hover:underline">Gán nhân viên</button>
                        </div>

                        <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                                <i className="bi bi-clock text-yellow-500"></i>
                                <span className="font-medium text-onyx text-sm">Booking #1236</span>
                            </div>
                            <p className="text-xs text-gray-500">Treo 1 giờ 45 phút - sắp tới SLA</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Tours */}
            <div className="mt-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-onyx">Tour bán chạy</h2>
                    <span className="text-sm text-tuscan-sun hover:underline cursor-pointer">Xem thêm</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-2xl p-4">
                        <div className="w-full h-32 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400" alt="Tour" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-medium text-onyx">Đà Lạt Weekend</h4>
                        <p className="text-xs text-gray-400 mb-2">42 đặt tháng này</p>
                        <div className="text-tuscan-sun font-semibold">4,500,000đ</div>
                    </div>

                    <div className="bg-white rounded-2xl p-4">
                        <div className="w-full h-32 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400" alt="Tour" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-medium text-onyx">Phú Quốc 5N4Đ</h4>
                        <p className="text-xs text-gray-400 mb-2">38 đặt tháng này</p>
                        <div className="text-tuscan-sun font-semibold">8,900,000đ</div>
                    </div>

                    <div className="bg-white rounded-2xl p-4">
                        <div className="w-full h-32 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400" alt="Tour" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-medium text-onyx">Nha Trang Resort</h4>
                        <p className="text-xs text-gray-400 mb-2">35 đặt tháng này</p>
                        <div className="text-tuscan-sun font-semibold">6,200,000đ</div>
                    </div>

                    <div className="bg-white rounded-2xl p-4">
                        <div className="w-full h-32 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400" alt="Tour" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-medium text-onyx">Sapa Trekking</h4>
                        <p className="text-xs text-gray-400 mb-2">28 đặt tháng này</p>
                        <div className="text-tuscan-sun font-semibold">5,800,000đ</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
