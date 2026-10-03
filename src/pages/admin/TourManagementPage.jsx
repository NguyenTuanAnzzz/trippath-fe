import { useNavigate } from 'react-router-dom';
import ButtonField from '../../components/ButtonField';

export default function TourPackageManagementPage() {
    const navigate = useNavigate();
    
    return (
        <main className="flex-1 p-8">
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-onyx">Quản lý TourPackage</h1>
                        <p className="text-gray-500 mt-1">Danh sách và quản lý các tourPackage du lịch</p>
                    </div>
                    <div className="w-40">
                        <ButtonField
                            bg="bg-tuscan-sun"
                            hover="hover:bg-tuscan-sun/90"
                            icon="bi-plus-lg"
                            onClick={() => navigate('/admin/tours/create')}
                        >
                            Thêm TourPackage
                        </ButtonField>
                    </div>
                </div>

                {/* Search & Filter */}
                <div className="bg-white rounded-2xl p-4 mb-6">
                    <div className="flex flex-wrap gap-4">
                        <div className="flex-1 min-w-[250px]">
                            <div className="relative">
                                <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm tourPackage..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-tuscan-sun"
                                />
                            </div>
                        </div>
                        <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-tuscan-sun">
                            <option value="">Tất cả địa điểm</option>
                            <option value="dalat">Đà Lạt</option>
                            <option value="vungtau">Vũng Tàu</option>
                            <option value="nhatrang">Nha Trang</option>
                        </select>
                        <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-tuscan-sun">
                            <option value="">Tất cả trạng thái</option>
                            <option value="active">Hoạt động</option>
                            <option value="inactive">Không hoạt động</option>
                        </select>
                    </div>
                </div>

                {/* tourPackages Table */}
                <div className="bg-white rounded-2xl overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-onyx">TourPackage</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-onyx">Địa điểm</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-onyx">Giá</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-onyx">Thời gian</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-onyx">Trạng thái</th>
                                <th className="px-6 py-4 text-right text-sm font-semibold text-onyx">Hành động</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-12 rounded-lg overflow-hidden bg-gray-200">
                                            <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=200" alt="tourPackage" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-onyx">Du lịch Đà Lạt 4N3Đ</div>
                                            <div className="text-xs text-gray-400">Mã: TOURPACKAGE001</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">Đà Lạt</td>
                                <td className="px-6 py-4 font-medium text-onyx">4,500,000đ</td>
                                <td className="px-6 py-4 text-gray-600">4 ngày 3 đêm</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Hoạt động</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                            <i className="bi bi-eye text-gray-500"></i>
                                        </button>
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                            <i className="bi bi-pencil text-gray-500"></i>
                                        </button>
                                        <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                                            <i className="bi bi-trash text-red-500"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-12 rounded-lg overflow-hidden bg-gray-200">
                                            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200" alt="tourPackage" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-onyx">Nha Trang Biển Xanh</div>
                                            <div className="text-xs text-gray-400">Mã: TOURPACKAGE002</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">Nha Trang</td>
                                <td className="px-6 py-4 font-medium text-onyx">6,200,000đ</td>
                                <td className="px-6 py-4 text-gray-600">3 ngày 2 đêm</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Hoạt động</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                            <i className="bi bi-eye text-gray-500"></i>
                                        </button>
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                            <i className="bi bi-pencil text-gray-500"></i>
                                        </button>
                                        <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                                            <i className="bi bi-trash text-red-500"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-12 rounded-lg overflow-hidden bg-gray-200">
                                            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200" alt="tourPackage" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-onyx">Sapa Trekking</div>
                                            <div className="text-xs text-gray-400">Mã: TOURPACKAGE003</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">Sapa</td>
                                <td className="px-6 py-4 font-medium text-onyx">5,800,000đ</td>
                                <td className="px-6 py-4 text-gray-600">3 ngày 2 đêm</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">Tạm dừng</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                            <i className="bi bi-eye text-gray-500"></i>
                                        </button>
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                            <i className="bi bi-pencil text-gray-500"></i>
                                        </button>
                                        <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                                            <i className="bi bi-trash text-red-500"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
                        <div className="text-sm text-gray-500">
                            Hiển thị 1-3 của 48 tourPackage
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50" disabled>
                                <i className="bi bi-chevron-left"></i>
                            </button>
                            <button className="w-8 h-8 bg-tuscan-sun text-white rounded-lg text-sm">1</button>
                            <button className="w-8 h-8 hover:bg-gray-100 rounded-lg text-sm">2</button>
                            <button className="w-8 h-8 hover:bg-gray-100 rounded-lg text-sm">3</button>
                            <span className="px-2 text-gray-400">...</span>
                            <button className="w-8 h-8 hover:bg-gray-100 rounded-lg text-sm">16</button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
