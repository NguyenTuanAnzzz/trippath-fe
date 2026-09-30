import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import AuthLayout from "../layouts/AuthlLayout";
import ButtonField from "../components/ButtonField";
import useRegister from "../hooks/useRegister";

export default function RegisterPage() {

    const { form, error, loading, handleChange, handleSubmit } = useRegister()


    return (

        <AuthLayout message={error}>
            {/* Header */}
            <div className="mb-6 pt-4">
                <h2 className="text-2xl font-semibold text-onyx">Tạo tài khoản mới</h2>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Full Name */}
                <InputField label="Họ và tên" id="name" name="name" type="text" placeholder="Nhập họ và tên" icon="bi-person" value={form.name} onChange={handleChange} />

                {/* Email */}
                <InputField label="Email" id="email" name="email" type="email" placeholder="email@example.com" icon="bi-envelope" value={form.email} onChange={handleChange} />

                {/* Phone */}
                <InputField label="Số điện thoại" id="phone" name="phone" type="tel" placeholder="0912 345 678" icon="bi-phone" value={form.phone} onChange={handleChange} />

                {/* Password */}
                <InputField label="Mật khẩu" id="password" name="password" type="password" placeholder="Tối thiểu 6 ký tự" icon="bi-lock" value={form.password} onChange={handleChange} />

                {/* Confirm Password */}
                <InputField label="Xác nhận mật khẩu" id="confirmPassword" name="confirmPassword" type="password" placeholder="Nhập lại mật khẩu" icon="bi-lock-fill" value={form.confirmPassword} onChange={handleChange} />

                {/* Terms */}
                <div className="flex items-center gap-2">
                    <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-onyx outline-none focus:ring-tuscan-sun/30 cursor-pointer"
                        checked={form.terms}
                        onChange={handleChange}
                    />
                    <label htmlFor="terms" className="text-sm text-gray-500 cursor-pointer">
                        Tôi đồng ý với{" "}
                        <a href="#" className="text-onyx hover:underline">Điều khoản</a>{" "}
                        và{" "}
                        <a href="#" className="text-onyx hover:underline">Chính sách bảo mật</a>
                    </label>
                </div>

                {/* Submit - 10% Accent CTA */}
                <ButtonField
                    type="submit"
                    bg="bg-tuscan-sun"
                    hover="hover:bg-tuscan-sun-dark"
                    disabled={loading}
                >
                    {loading ? "Đang đăng ký..." : "Đăng ký"}
                </ButtonField>
            </form>

            {/* Divider */}
            <div className="relative my-5">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center">
                    <span className="px-3 bg-platinum text-sm text-gray-400">hoặc tiếp tục với</span>
                </div>
            </div>

            {/* Google Button - 30% Secondary */}
            <ButtonField bg="bg-white" hover="hover:bg-platinum-dark" icon="bi-google text-[#EA4335]" > Đăng ký với Google </ButtonField>

            {/* Back to home */}
            <div className="mt-5 text-center">
                <Link
                    to="/"
                    className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-onyx transition-colors"
                >
                    <i className="bi bi-chevron-left"></i>
                    Quay lại trang chủ
                </Link>
            </div>

            {/* Already have account */}
            <div className="mt-5 text-center">
                <span className="text-sm text-gray-500">
                    Đã có tài khoản?{" "}
                    <Link to="/login" className="text-onyx font-medium hover:underline">
                        Đăng nhập ngay
                    </Link>
                </span>
            </div>
        </AuthLayout>
    );
}
