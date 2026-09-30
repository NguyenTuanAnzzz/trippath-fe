import { useState, useEffect } from "react";
import useAuth from "../contexts/AuthContext";
import useUpdateMe from "../hooks/useUpdateMe";
import InputField from "../components/InputField";
import Alert from "../components/Alert";

export default function ProfilePage() {
    const { user } = useAuth();
    const { form, setForm, loading, handleChange, handleSubmit, message, error } = useUpdateMe();
    const [isEditing, setIsEditing] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (message || error) {
            setShowAlert(true);
        }
    }, [message, error]);

    const handleSave = async (e) => {
        const success = await handleSubmit(e);
        if (success) {
            setIsEditing(false);
        }
    };

    return (
        <div>
            {/* Alert Floating */}
            {(message || error) && showAlert && (
                <div className="fixed top-4 right-4 z-50 min-w-[300px] shadow-lg animate-fade-in">
                    <Alert
                        variant={error ? "error" : "success"}
                        message={error || message}
                        onClose={() => setShowAlert(false)}
                    />
                </div>
            )}
            {/* Profile Form */}
            <div className="space-y-6">
                {/* Personal Info */}
                <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-onyx">Thông tin cá nhân</h3>
                        {!isEditing ? (
                            <button onClick={() => setIsEditing(true)} className="text-sm text-tuscan-sun font-medium hover:underline flex items-center gap-1">
                                <i className="bi bi-pencil"></i>
                                Chỉnh sửa
                            </button>
                        ) : (
                            <div className="flex items-center gap-4">
                                <button onClick={() => {
                                    setIsEditing(false);
                                    setForm({ name: user?.name || "", phone: user?.phone || "", avatar: "" });
                                }} className="text-sm text-gray-500 font-medium hover:underline">
                                    Hủy
                                </button>
                                <button onClick={handleSave} disabled={loading} className="text-sm text-tuscan-sun font-medium hover:underline flex items-center gap-1">
                                    <i className="bi bi-check-lg"></i>
                                    {loading ? 'Đang lưu...' : 'Lưu lại'}
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col-reverse md:flex-row gap-8">
                        {/* Form Fields */}
                        <div className="flex-1 grid md:grid-cols-2 gap-4">
                            <InputField
                                label="HỌ VÀ TÊN"
                                id="name"
                                name="name"
                                type="text"
                                icon="bi-person"
                                value={form.name}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />

                            <InputField
                                label="EMAIL"
                                id="email"
                                type="email"
                                icon="bi-envelope"
                                value={user?.email || ''}
                                readOnly={true}
                                className={isEditing ? 'cursor-not-allowed opacity-70' : ''}
                                title="Email không thể thay đổi"
                            />

                            <InputField
                                label="SỐ ĐIỆN THOẠI"
                                id="phone"
                                name="phone"
                                type="tel"
                                icon="bi-telephone"
                                value={form.phone}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />

                            <InputField
                                label="VAI TRÒ"
                                id="role"
                                type="text"
                                icon="bi-shield-check"
                                value={user?.role === 'ADMIN' ? 'Quản trị viên' : 'Khách hàng'}
                                readOnly={true}
                                className={isEditing ? 'cursor-not-allowed opacity-70' : ''}
                            />

                            <div className="md:col-span-2">
                                <InputField
                                    label="TRẠNG THÁI"
                                    id="status"
                                    type="text"
                                    icon="bi-activity"
                                    value={user?.status === 'ACTIVE' ? 'Đã kích hoạt' : user?.status === 'PENDING' ? 'Chờ xác minh' : 'Đã khóa'}
                                    readOnly={true}
                                    className={isEditing ? 'cursor-not-allowed opacity-70' : ''}
                                />
                            </div>
                        </div>

                        {/* Avatar Section inside Form */}
                        <div className="md:w-1/3 flex flex-col items-center justify-center md:border-l md:border-gray-100 md:pl-8">
                            <input
                                type="file"
                                id="avatarUpload"
                                name="avatar"
                                accept="image/*"
                                className="hidden"
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                            <label htmlFor="avatarUpload" className={`relative group ${isEditing ? 'cursor-pointer' : 'cursor-default'}`}>
                                <div className={`w-32 h-32 rounded-full p-1 shadow-lg transition-all ${isEditing ? 'bg-gradient-to-tr from-tuscan-sun to-orange-400' : 'bg-gray-200'}`}>
                                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                                        <img
                                            src={form?.avatar instanceof File ? URL.createObjectURL(form.avatar) : (form?.avatar || user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'U')}&background=EEC643&color=141414&bold=true&size=224`)}
                                            alt="Avatar"
                                            className={`w-full h-full object-cover transition-opacity duration-300 ${isEditing ? 'group-hover:opacity-75' : ''}`}
                                        />
                                    </div>
                                </div>
                                {isEditing && (
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-black/50 text-white p-2.5 rounded-full backdrop-blur-sm">
                                            <i className="bi bi-camera-fill text-xl"></i>
                                        </div>
                                    </div>
                                )}
                            </label>
                            <div className="mt-4 text-center">
                                <h2 className="text-lg font-bold text-onyx mb-1">{isEditing && form?.name ? form.name : (user?.name || 'Đang tải...')}</h2>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-tuscan-sun/10 text-tuscan-sun text-xs font-semibold rounded-full border border-tuscan-sun/20 shadow-sm">
                                    <i className="bi bi-patch-check-fill text-sm"></i>
                                    {user?.role === 'ADMIN' ? 'Quản trị viên' : 'Khách hàng'}
                                </span>
                            </div>
                            <p className={`text-xs mt-4 text-center max-w-[200px] transition-colors ${isEditing ? 'text-gray-500' : 'text-transparent'}`}>
                                Nhấp vào ảnh để thay đổi.<br />Dung lượng tối đa 2MB.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Security */}
                <div className="bg-white rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-onyx mb-6">Bảo mật</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-tuscan-sun/10 rounded-xl flex items-center justify-center">
                                    <i className="bi bi-lock text-tuscan-sun text-lg"></i>
                                </div>
                                <div>
                                    <div className="font-medium text-onyx">Đổi mật khẩu</div>
                                    <div className="text-xs text-gray-400">Cập nhật mật khẩu mới</div>
                                </div>
                            </div>
                            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-onyx hover:bg-platinum transition-colors">
                                Thay đổi
                            </button>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 ${user?.status === 'ACTIVE' ? 'bg-green-100' : 'bg-tuscan-sun/10'} rounded-xl flex items-center justify-center`}>
                                    <i className={`bi ${user?.status === 'ACTIVE' ? 'bi-check-circle text-green-500' : 'bi-exclamation-circle text-tuscan-sun'} text-lg`}></i>
                                </div>
                                <div>
                                    <div className="font-medium text-onyx">Email {user?.status === 'ACTIVE' ? 'đã xác minh' : 'chưa xác minh'}</div>
                                    <div className={`text-xs ${user?.status === 'ACTIVE' ? 'text-green-500' : 'text-gray-400'}`}>{user?.email || ''}</div>
                                </div>
                            </div>
                            {user?.status === 'ACTIVE' ? (
                                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                                    Đã xác minh
                                </span>
                            ) : (
                                <button className="px-3 py-1 bg-tuscan-sun text-white text-xs font-medium rounded-full hover:bg-tuscan-sun/90 transition-colors">
                                    Xác minh ngay
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-error mb-4">Vùng nguy hiểm</h3>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-medium text-onyx">Xóa tài khoản</div>
                            <div className="text-xs text-gray-400">Tài khoản và dữ liệu sẽ bị xóa vĩnh viễn</div>
                        </div>
                        <button className="px-4 py-2 border border-error text-error rounded-lg text-sm hover:bg-error hover:text-white transition-colors">
                            Xóa tài khoản
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
