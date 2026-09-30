import { Link } from "react-router-dom";
export default function HomePage() {
    const featuredTours = [
        {
            id: 1,
            name: "Hạ Long - Cố đô Hoa Lư",
            location: "Quảng Ninh - Ninh Bình",
            duration: "3N2Đ",
            price: "2.990.000",
            rating: 4.8,
            reviews: 124,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        },
        {
            id: 2,
            name: "Phú Quốc - Thiên đường biển đảo",
            location: "Kiên Giang",
            duration: "4N3Đ",
            price: "4.500.000",
            rating: 4.9,
            reviews: 98,
            image: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=600&h=400&fit=crop",
        },
        {
            id: 3,
            name: "Sapa - Mùa lúa chín",
            location: "Lào Cai",
            duration: "3N2Đ",
            price: "3.200.000",
            rating: 4.7,
            reviews: 86,
            image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&h=400&fit=crop",
        },
        {
            id: 4,
            name: "Hội An - Phố cổ về đêm",
            location: "Quảng Nam",
            duration: "2N1Đ",
            price: "1.850.000",
            rating: 4.6,
            reviews: 156,
            image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&h=400&fit=crop",
        },
    ];

    const categories = [
        { icon: "bi-water", name: "Biển & Đảo", count: 45 },
        { icon: "bi-geo-alt", name: "Núi & Rừng", count: 28 },
        { icon: "bi-building", name: "Thành phố", count: 36 },
        { icon: "bi-flower1", name: "Miền Tây", count: 22 },
        { icon: "bi-sun", name: "Nghỉ dưỡng", count: 18 },
        { icon: "bi-camera", name: "Adventure", count: 15 },
    ];

    const stats = [
        { value: "500+", label: "Tour du lịch" },
        { value: "15.000+", label: "Khách hàng" },
        { value: "4.9/5", label: "Đánh giá" },
    ];

    return (
        <>

            {/* Hero Section */}
            <section className="relative bg-onyx overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1600&h=800&fit=crop"
                        alt="Travel Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/90 to-onyx/60"></div>
                </div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="max-w-2xl">
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 bg-tuscan-sun/20 rounded-full px-4 py-1.5 mb-6">
                            <i className="bi bi-stars text-tuscan-sun text-sm"></i>
                            <span className="text-tuscan-sun text-sm font-medium">Khám phá Việt Nam</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                            Hành trình đúng,
                            <br />
                            <span className="text-tuscan-sun">Trải nghiệm đáng</span>
                        </h1>

                        <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
                            Đặt tour du lịch nội địa dễ dàng, thanh toán an toàn qua VNPay và MoMo.
                            Hơn 500+ tour hấp dẫn đang chờ bạn khám phá.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/tours"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-tuscan-sun text-onyx font-semibold rounded-lg hover:bg-tuscan-sun-dark transition-colors"
                            >
                                <span>Khám phá tours</span>
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                            <button className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                                <i className="bi bi-play-circle"></i>
                                <span>Xem video</span>
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-12 mt-12 pt-8 border-t border-white/10">
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <div className="text-3xl font-bold text-tuscan-sun">{stat.value}</div>
                                    <div className="text-sm text-white/60 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Search Section */}
            <section className="relative -mt-8 z-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Destination */}
                            <div className="md:col-span-1">
                                <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
                                    Điểm đến
                                </label>
                                <div className="relative">
                                    <i className="bi bi-geo-alt absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                    <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-platinum text-onyx text-sm outline-none focus:border-tuscan-sun transition-colors appearance-none">
                                        <option>Chọn điểm đến</option>
                                        <option>Hạ Long</option>
                                        <option>Phú Quốc</option>
                                        <option>Sapa</option>
                                        <option>Hội An</option>
                                        <option>Đà Nẵng</option>
                                    </select>
                                    <i className="bi bi-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                                </div>
                            </div>

                            {/* Date */}
                            <div className="md:col-span-1">
                                <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
                                    Ngày khởi hành
                                </label>
                                <div className="relative">
                                    <i className="bi bi-calendar absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                    <input
                                        type="date"
                                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-platinum text-onyx text-sm outline-none focus:border-tuscan-sun transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Guests */}
                            <div className="md:col-span-1">
                                <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
                                    Số khách
                                </label>
                                <div className="relative">
                                    <i className="bi bi-people absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                    <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-platinum text-onyx text-sm outline-none focus:border-tuscan-sun transition-colors appearance-none">
                                        <option>1 người</option>
                                        <option>2 người</option>
                                        <option>3 người</option>
                                        <option>4 người</option>
                                        <option>5+ người</option>
                                    </select>
                                    <i className="bi bi-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                                </div>
                            </div>

                            {/* Search Button */}
                            <div className="md:col-span-1 flex items-end">
                                <button className="w-full py-3 px-6 bg-onyx text-white font-semibold rounded-lg hover:bg-onyx-light transition-colors flex items-center justify-center gap-2">
                                    <i className="bi bi-search"></i>
                                    <span>Tìm kiếm</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-onyx mb-3">
                            Khám phá theo loại hình
                        </h2>
                        <p className="text-gray-500">
                            Chọn loại hình du lịch phù hợp với sở thích của bạn
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                to={`/tours?category=${category.name}`}
                                className="group bg-white rounded-xl p-5 text-center hover:shadow-lg transition-all hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 bg-tuscan-sun/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-tuscan-sun/20 transition-colors">
                                    <i className={`bi ${category.icon} text-2xl text-tuscan-sun`}></i>
                                </div>
                                <h3 className="font-medium text-onyx text-sm mb-1">{category.name}</h3>
                                <p className="text-xs text-gray-400">{category.count} tours</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Tours Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-semibold text-onyx mb-3">
                                Tours nổi bật
                            </h2>
                            <p className="text-gray-500">
                                Những tour được yêu thích nhất trong tháng
                            </p>
                        </div>
                        <Link
                            to="/tours"
                            className="hidden md:flex items-center gap-2 text-tuscan-sun font-medium hover:underline"
                        >
                            Xem tất cả
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredTours.map((tour) => (
                            <Link
                                key={tour.id}
                                to={`/tour/${tour.id}`}
                                className="group bg-platinum rounded-xl overflow-hidden hover:shadow-xl transition-all"
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={tour.image}
                                        alt={tour.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 bg-tuscan-sun text-onyx text-xs font-semibold rounded-full">
                                            {tour.duration}
                                        </span>
                                    </div>
                                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                                        <i className="bi bi-heart text-gray-400 hover:text-error transition-colors"></i>
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    {/* Location */}
                                    <div className="flex items-center gap-1 text-gray-400 text-xs mb-2">
                                        <i className="bi bi-geo-alt"></i>
                                        <span>{tour.location}</span>
                                    </div>

                                    {/* Name */}
                                    <h3 className="font-semibold text-onyx mb-2 line-clamp-2 group-hover:text-tuscan-sun transition-colors">
                                        {tour.name}
                                    </h3>

                                    {/* Rating */}
                                    <div className="flex items-center gap-1 mb-3">
                                        <i className="bi bi-star-fill text-tuscan-sun text-sm"></i>
                                        <span className="text-sm font-medium text-onyx">{tour.rating}</span>
                                        <span className="text-sm text-gray-400">({tour.reviews} đánh giá)</span>
                                    </div>

                                    {/* Price */}
                                    <div className="pt-3 border-t border-gray-200">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-xs text-gray-400">Từ</span>
                                            <span className="text-xl font-bold text-onyx">{tour.price}</span>
                                            <span className="text-xs text-gray-400">/người</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile CTA */}
                    <div className="mt-8 text-center md:hidden">
                        <Link
                            to="/tours"
                            className="inline-flex items-center gap-2 text-tuscan-sun font-medium"
                        >
                            Xem tất cả tours
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Promo Banner */}
            <section className="py-20 bg-onyx relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-tuscan-sun/20 rounded-full px-4 py-1.5 mb-6">
                                <i className="bi bi-percent text-tuscan-sun text-sm"></i>
                                <span className="text-tuscan-sun text-sm font-medium">Ưu đãi đặc biệt</span>
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                                Giảm đến 30% cho chuyến đi mùa hè
                            </h2>

                            <p className="text-white/60 mb-8 max-w-md">
                                Đặt tour trước ngày 30/06/2026 để nhận ưu đãi giảm giá 30% cho tất cả
                                các tour du lịch biển và đảo. Áp dụng cho đoàn từ 4 người trở lên.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/tours?promo=SUMMER30"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-tuscan-sun text-onyx font-semibold rounded-lg hover:bg-tuscan-sun-dark transition-colors"
                                >
                                    <span>Xem tours giảm giá</span>
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                                <div className="flex items-center gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-tuscan-sun">15</div>
                                        <div className="text-xs text-white/50">Ngày</div>
                                    </div>
                                    <div className="text-tuscan-sun text-2xl">:</div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-tuscan-sun">08</div>
                                        <div className="text-xs text-white/50">Giờ</div>
                                    </div>
                                    <div className="text-tuscan-sun text-2xl">:</div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-tuscan-sun">42</div>
                                        <div className="text-xs text-white/50">Phút</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-onyx mb-3">
                            Tại sao chọn PathTrip?
                        </h2>
                        <p className="text-gray-500">
                            Chúng tôi mang đến trải nghiệm du lịch tốt nhất cho bạn
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 text-center">
                            <div className="w-16 h-16 bg-tuscan-sun/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                <i className="bi bi-shield-check text-3xl text-tuscan-sun"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-onyx mb-2">Thanh toán an toàn</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Hỗ trợ thanh toán qua VNPay và MoMo với công nghệ mã hóa SSL 256-bit.
                                Hoàn tiền 100% nếu hủy tour trước 7 ngày.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 text-center">
                            <div className="w-16 h-16 bg-tuscan-sun/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                <i className="bi bi-headset text-3xl text-tuscan-sun"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-onyx mb-2">Hỗ trợ 24/7</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Đội ngũ hỗ trợ viên luôn sẵn sàng giải đáp mọi thắc mắc qua điện thoại,
                                Zalo và email mọi lúc, mọi nơi.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 text-center">
                            <div className="w-16 h-16 bg-tuscan-sun/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                <i className="bi bi-tag text-3xl text-tuscan-sun"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-onyx mb-2">Giá tốt nhất</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Cam kết giá tour tốt nhất thị trường, không phí ẩn. Nhiều ưu đãi hấp dẫn
                                cho khách hàng thân thiết.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-tuscan-sun/20 to-tuscan-sun/5">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-semibold text-onyx mb-4">
                        Sẵn sàng cho chuyến đi tiếp theo?
                    </h2>
                    <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                        Đăng ký tài khoản ngay hôm nay để nhận ưu đãi 10% cho đơn hàng đầu tiên
                        và cập nhật những tour mới nhất.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/register"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-onyx text-white font-semibold rounded-lg hover:bg-onyx-light transition-colors"
                        >
                            <span>Đăng ký ngay</span>
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                        <Link
                            to="/tours"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-onyx font-semibold rounded-lg hover:bg-platinum transition-colors border border-gray-200"
                        >
                            <span>Khám phá tours</span>
                        </Link>
                    </div>
                </div>
            </section>


        </>
    );
}
