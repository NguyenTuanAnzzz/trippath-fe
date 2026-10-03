import InputField from "../../components/InputField";
import ButtonField from "../../components/ButtonField";
import Itierary from "../../components/Itierary";
import useCreateTour from "../../hooks/useCreateTour";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
export default function CreateTourPackage() {

    const { form, error, message, loading, handleChange, handleSubmit, handleItineraryChange } = useCreateTour();

    const imagesRef = useRef(null);
    const handleViewer = () => {
        if (!imagesRef.current) return;

        const viewer = new Viewer(imagesRef.current);
        viewer.show();
    };
    return (
        <div className="flex-1 p-8">
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-onyx mb-2">Tạo TourPackage Mới</h1>
                    <p className="text-gray-500">Điền thông tin để tạo TourPackage du lịch</p>
                </div>

                {/* Form */}
                <form className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6" onSubmit={handleSubmit}>
                    {/* Basic Info */}
                    <div className="border-b border-gray-100 pb-6">
                        <h2 className="text-lg font-semibold text-onyx mb-4">Thông Tin Cơ Bản</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField
                                label="Tên TourPackage"
                                id="name"
                                name="name"
                                placeholder="Nhập tên TourPackage"
                                value={form.name}
                                onChange={handleChange}
                            />
                            <InputField
                                label="Địa Điểm"
                                id="location"
                                name="location"
                                placeholder="Nhập địa điểm"
                                value={form.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mt-4">
                            <InputField
                                label="Mô Tả"
                                id="description"
                                name="description"
                                placeholder="Nhập mô tả TourPackage"
                                value={form.description}
                                onChange={handleChange}
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
                                value={form.durationDays}
                                onChange={handleChange}
                            />
                            <InputField
                                label="Số Đêm"
                                id="durationNights"
                                name="durationNights"
                                type="number"
                                placeholder="VD: 2"
                                value={form.durationNights}
                                onChange={handleChange}
                            />
                            <InputField
                                label="Giá (VNĐ)"
                                id="price"
                                name="price"
                                type="number"
                                placeholder="Nhập giá TourPackage"
                                value={form.price}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Itineraries */}
                    <div className="border-b border-gray-100 pb-6">
                        <h2 className="text-lg font-semibold text-onyx mb-4">Lịch Trình</h2>
                        <div className="space-y-4">
                            {form.itineraries.map((itinerary, index) => (
                                <Itierary
                                    key={index}
                                    day={itinerary.dayNumber}
                                    index={index}
                                    itinerary={itinerary}
                                    onChange={handleItineraryChange}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Images */}
                    <div>
                        <h2 className="text-lg font-semibold text-onyx mb-4">Hình Ảnh</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            <label
                                htmlFor="image"
                                className="border-2 border-dashed border-gray-300 rounded-lg p-4 
               flex flex-col items-center justify-center text-center 
               hover:border-tuscan-sun transition-colors cursor-pointer aspect-square"
                            >
                                <i className="bi bi-cloud-arrow-up text-3xl text-gray-400 mb-2"></i>

                                <p className="text-sm text-gray-500 mb-1">
                                    Tải ảnh lên
                                </p>

                                <p className="text-xs text-gray-400">
                                    Tối đa 5MB
                                </p>

                                <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    accept="image/png,image/jpeg,image/webp"
                                    onChange={handleChange}
                                    className="hidden"
                                />
                            </label>
                            {/* Chỗ này có thể render danh sách các hình ảnh đã chọn */}
                            {form.images.map((image, index) => (
                                <div key={index}>
                                    <img
                                        src={URL.createObjectURL(image)}
                                        ref={imagesRef}
                                        alt={`Ảnh ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                        onClick={handleViewer}
                                    />
                                </div>
                            ))}
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
                            type={"submit"}
                        >
                            <i className="bi bi-check-lg"></i>
                            Tạo TourPackage
                        </ButtonField>
                    </div>
                </form>
            </div>
        </div>
    );
}
