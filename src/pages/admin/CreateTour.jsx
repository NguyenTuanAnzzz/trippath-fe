import InputField from "../../components/InputField";
import ButtonField from "../../components/ButtonField";

export default function CreateTour() {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-onyx mb-2">Tạo Tour Mới</h1>
                    <p className="text-gray-500">Điền thông tin để tạo gói tour du lịch</p>
                </div>

                {/* Form */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
                    {/* Basic Info */}
                    <div className="border-b border-gray-100 pb-6">
                        <h2 className="text-lg font-semibold text-onyx mb-4">Thông Tin Cơ Bản</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField
                                label="Tên Tour"
                                id="name"
                                name="name"
                                placeholder="Nhập tên tour"
                            />
                            <InputField
                                label="Địa Điểm"
                                id="location"
                                name="location"
                                placeholder="Nhập địa điểm"
                            />
                        </div>
                        <div className="mt-4">
                            <InputField
                                label="Mô Tả"
                                id="description"
                                name="description"
                                placeholder="Nhập mô tả tour"
                            />
                        </div>
                    </div>

                    {/* Duration & Price */}
                    <div className="border-b border-gray-100 pb-6">
                        <h2 className="text-lg font-semibold text-onyx mb-4">Thời Gian & Giá</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <InputField
                                label="Số Ngày"
                                id="durationDays"
                                name="durationDays"
                                type="number"
                                placeholder="VD: 3"
                            />
                            <InputField
                                label="Số Đêm"
                                id="durationNights"
                                name="durationNights"
                                type="number"
                                placeholder="VD: 2"
                            />
                            <InputField
                                label="Giá (VNĐ)"
                                id="price"
                                name="price"
                                type="number"
                                placeholder="Nhập giá tour"
                            />
                        </div>
                    </div>

                    {/* Itineraries */}
                    <div className="border-b border-gray-100 pb-6">
                        <h2 className="text-lg font-semibold text-onyx mb-4">Lịch Trình</h2>
                        <div className="space-y-4">
                            {/* Day 1 */}
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium text-onyx bg-white px-3 py-1 rounded border border-gray-200">
                                        Ngày 1
                                    </span>
                                </div>
                                <div className="mt-3 space-y-3">
                                    <InputField
                                        label="Tiêu Đề"
                                        id="itinerary-1-title"
                                        name="itinerary-1-title"
                                        placeholder="VD: Khởi hành từ TP.HCM"
                                    />
                                    <InputField
                                        label="Mô Tả"
                                        id="itinerary-1-desc"
                                        name="itinerary-1-desc"
                                        placeholder="Chi tiết lịch trình ngày 1"
                                    />
                                </div>
                            </div>

                            {/* Day 2 */}
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium text-onyx bg-white px-3 py-1 rounded border border-gray-200">
                                        Ngày 2
                                    </span>
                                </div>
                                <div className="mt-3 space-y-3">
                                    <InputField
                                        label="Tiêu Đề"
                                        id="itinerary-2-title"
                                        name="itinerary-2-title"
                                        placeholder="VD: Tham quan Đà Lạt"
                                    />
                                    <InputField
                                        label="Mô Tả"
                                        id="itinerary-2-desc"
                                        name="itinerary-2-desc"
                                        placeholder="Chi tiết lịch trình ngày 2"
                                    />
                                </div>
                            </div>

                            {/* Day 3 */}
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium text-onyx bg-white px-3 py-1 rounded border border-gray-200">
                                        Ngày 3
                                    </span>
                                </div>
                                <div className="mt-3 space-y-3">
                                    <InputField
                                        label="Tiêu Đề"
                                        id="itinerary-3-title"
                                        name="itinerary-3-title"
                                        placeholder="VD: Mua sắm và trở về"
                                    />
                                    <InputField
                                        label="Mô Tả"
                                        id="itinerary-3-desc"
                                        name="itinerary-3-desc"
                                        placeholder="Chi tiết lịch trình ngày 3"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="mt-4 text-sm text-tuscan-sun hover:text-tuscan-sun/80 font-medium flex items-center gap-1"
                        >
                            <i className="bi bi-plus"></i>
                            Thêm Ngày
                        </button>
                    </div>

                    {/* Images */}
                    <div>
                        <h2 className="text-lg font-semibold text-onyx mb-4">Hình Ảnh</h2>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-tuscan-sun transition-colors cursor-pointer">
                            <i className="bi bi-cloud-arrow-up text-4xl text-gray-400 mb-3"></i>
                            <p className="text-sm text-gray-500 mb-2">
                                Kéo thả hình ảnh hoặc nhấn để chọn
                            </p>
                            <p className="text-xs text-gray-400">
                                PNG, JPG, WEBP (tối đa 5MB)
                            </p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                        <ButtonField
                            bg="bg-white"
                            hover="hover:bg-gray-50"
                        >
                            Hủy
                        </ButtonField>
                        <ButtonField
                            bg="bg-tuscan-sun"
                            hover="hover:bg-tuscan-sun/90"
                        >
                            <i className="bi bi-check-lg"></i>
                            Tạo Tour
                        </ButtonField>
                    </div>
                </div>
            </div>
        </div>
    );
}
