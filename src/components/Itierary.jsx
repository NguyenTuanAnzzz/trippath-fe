import InputField from "./InputField";

export default function Itierary({ day = 1 }) {
    return (
        <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-onyx bg-white px-3 py-1 rounded border border-gray-200">
                    Ngày {day}
                </span>
            </div>
            <div className="mt-3 space-y-3">
                <InputField
                    label="Tiêu Đề"
                    id={`itinerary-${day}-title`}
                    name={`itinerary-${day}-title`}
                    placeholder="VD: Khởi hành từ TP.HCM"
                />
                <InputField
                    label="Mô Tả"
                    id={`itinerary-${day}-desc`}
                    name={`itinerary-${day}-desc`}
                    placeholder={`Chi tiết lịch trình ngày ${day}`}
                />
            </div>
        </div>
    );
}