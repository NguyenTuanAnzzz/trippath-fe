import { useEffect, useState } from "react";
import banner1 from "../assets/banner-1.jpg";
import Alert from "../components/Alert";

export default function AuthLayout({ children, message }) {
    const [showAlert, setShowAlert] = useState(false)
    useEffect(() => {
        if (message) {
            setShowAlert(true);
        }
    }, [message]);
    return (
        <div className="min-h-screen flex">
            {/* Left Panel - Branding (30% Secondary - Onyx) */}
            <div className="hidden lg:flex lg:w-2/5 bg-onyx relative overflow-hidden">
                {/* Banner image */}
                <img
                    src={banner1}
                    alt="PathTrip Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-onyx/70"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full p-10">
                    {/* Logo */}
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-tuscan-sun/20 rounded-xl flex items-center justify-center">
                                <i className="bi bi-globe-americas text-tuscan-sun text-xl"></i>
                            </div>
                            <span className="text-xl font-semibold text-white">PathTrip</span>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-semibold text-white">
                                Hành trình đúng<br />
                                <span className="text-tuscan-sun">Trải nghiệm đáng</span>
                            </h1>
                            <p className="text-white/70 leading-relaxed">
                                Khám phá tour du lịch nội địa tuyệt vời. Đặt tour dễ dàng, thanh toán an toàn qua VNPay và MoMo.
                            </p>
                        </div>

                        {/* Feature pills */}
                        <div className="flex flex-wrap gap-3">
                            {[
                                { icon: "bi-airplane", label: "Tour đa dạng" },
                                { icon: "bi-shield-check", label: "Thanh toán an toàn" },
                                { icon: "bi-headset", label: "Hỗ trợ 24/7" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2.5">
                                    <i className={`bi ${item.icon} text-tuscan-sun`}></i>
                                    <span className="text-white font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-sm text-white/50">© 2026 PathTrip</div>
                </div>
            </div>

            {/* Right Panel - Form (60% Base - Platinum/White) */}
            <div className="flex-1 flex items-center justify-center bg-platinum px-6 py-8">
                <div className="w-full max-w-[480px]">
                    {/* Mobile logo */}
                    <div className="lg:hidden flex items-center gap-2 mb-6">
                        <div className="w-10 h-10 bg-onyx rounded-lg flex items-center justify-center">
                            <i className="bi bi-globe-americas text-tuscan-sun text-lg"></i>
                        </div>
                        <span className="text-lg font-semibold text-onyx">PathTrip</span>
                    </div>

                    {/* Alert */}
                    {message && showAlert && (
                        <div className="fixed top-4 right-4 z-50 min-w-[300px] shadow-lg animate-fade-in">
                            <Alert
                                variant="error"
                                message={message}
                                onClose={() => setShowAlert(false)}
                            />
                        </div>
                    )}

                    {children}


                </div>
            </div>
        </div>
    )
}