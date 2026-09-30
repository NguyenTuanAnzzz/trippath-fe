import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthlLayout";
import ButtonField from "../components/ButtonField";
import useVerifyEmail from "../hooks/useVerifyEmail";
import { useEffect, useState } from "react";

export default function OtpPage() {
    const { email, error, loading, otps, handleChange, handlePaste, handleSubmit, expiresAt } = useVerifyEmail();
    const [time, setTime] = useState(() =>
        expiresAt
            ? Math.max(new Date(expiresAt).getTime() - Date.now(), 0)
            : 60000
    );

    useEffect(() => {
        const targetTime = expiresAt
            ? new Date(expiresAt).getTime()
            : Date.now() + 60000;

        const timer = setInterval(() => {
            const remaining = targetTime - Date.now();

            if (remaining <= 0) {
                setTime(0);
                clearInterval(timer);
            } else {
                setTime(remaining);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [expiresAt]);
    return (
        <AuthLayout message={error}>
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-onyx">Nhập OTP để kích hoạt email</h2>
                <p className="mt-2 text-sm text-gray-500">
                    Mã xác thực đã được gửi đến email:
                </p>
                <p className="font-medium text-onyx mt-1">{email}</p>
            </div>

            {/* OTP Inputs */}
            <form onSubmit={handleSubmit}>
                <div className="flex gap-3 justify-center mb-4" >
                    {otps.map((_, i) => (
                        <input
                            key={i}
                            onChange={(e) => handleChange(e, i)}
                            onPaste={(e) => handlePaste(e, i)}
                            type="text"
                            maxLength={1}
                            className="w-12 h-14 text-center text-xl font-semibold border border-gray-300 rounded-lg bg-white text-onyx outline-none focus:border-onyx focus:ring-2 focus:ring-tuscan-sun/30 transition-shadow"
                            placeholder="•"
                            value={otps[i]}
                        />
                    ))}
                </div>


                {/* Submit */}
                <ButtonField
                    bg="bg-tuscan-sun"
                    hover="hover:bg-tuscan-sun-dark"
                    disabled={loading || time === 0}
                    type="submit"
                >
                    {time === 0 ? "OTP đã hết hạn" : "Xác nhận"}
                </ButtonField>
            </form>

            {/* Resend */}
            <div className="text-center mt-6 mb-4">
                <span className="text-sm text-gray-500">Bạn chưa nhận được mã? </span>
                <button
                    disabled={time > 0}
                    className={`text-sm font-medium transition-colors ${time > 0
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-tuscan-sun hover:underline cursor-pointer"
                        }`}
                >
                    Gửi lại mã {time > 0 && `(${String(Math.floor(time / 60000)).padStart(2, "0")}:${String(Math.floor((time % 60000) / 1000)).padStart(2, "0")})`}
                </button>
            </div>

            {/* Divider */}
            <div className="relative my-5">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center">
                    <span className="px-3 bg-platinum text-sm text-gray-400">hoặc</span>
                </div>
            </div>

            {/* Back to login */}
            <div className="text-center">
                <span className="text-sm text-gray-500">
                    Quay lại đăng nhập?{" "}
                    <Link to="/login" className="text-onyx font-medium hover:underline">
                        Đăng nhập
                    </Link>
                </span>
            </div>
        </AuthLayout>
    );
}
