import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import AuthLayout from "../layouts/AuthlLayout";
import ButtonField from "../components/ButtonField";
import useLogin from "../hooks/useLogin";

export default function LoginPage() {
    const { form, error, loading, handleChange, handleSubmit } = useLogin()

    return (
        <AuthLayout message={error}>
            {/* Header */}
            <div className="mb-8 pt-4">
                <h2 className="text-3xl font-semibold text-onyx tracking-tight">Chào mừng trở lại</h2>
                <p className="mt-2 text-sm text-gray-500">Đăng nhập để tiếp tục đặt tour của bạn</p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Email */}
                <InputField
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    icon="bi-envelope"
                    value={form.email}
                    onChange={handleChange}
                />

                {/* Password */}
                <InputField
                    label="Mật khẩu"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Nhập mật khẩu"
                    icon="bi-lock"
                    value={form.password}
                    onChange={handleChange}
                />

                {/* Forgot password */}
                <div className="flex justify-end">
                    <Link
                        to="/forgot-password"
                        className="text-sm text-tuscan-sun font-medium hover:underline transition-all"
                    >
                        Quên mật khẩu?
                    </Link>
                </div>

                {/* Submit */}
                <ButtonField type="submit" bg="bg-tuscan-sun" hover="hover:bg-tuscan-sun-dark" disabled={loading}>
                    {loading ? "Đang đăng nhập..." : "Đăng nhập"}
                </ButtonField>
            </form>

            {/* Divider */}
            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                    <span className="px-4 bg-platinum text-xs text-gray-400 tracking-wide uppercase">hoặc tiếp tục với</span>
                </div>
            </div>

            {/* Google Button */}
            <ButtonField
                bg="bg-white"
                hover="hover:bg-platinum-dark"
                border="border border-gray-200"
                icon="bi-google text-[#EA4335]"
            >
                Đăng nhập với Google
            </ButtonField>

            {/* Register link */}
            <div className="mt-8 text-center">
                <span className="text-sm text-gray-500">
                    Chưa có tài khoản?{" "}
                    <Link to="/register" className="text-onyx font-medium hover:underline">
                        Đăng ký ngay
                    </Link>
                </span>
            </div>
        </AuthLayout>
    );
}
