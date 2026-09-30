export const getUtilities = (role) => {
    const links = [
        {
            path: "/profile",
            icon: "bi bi-person",
            label: "Hồ sơ",
            roles: ["ADMIN", "CUSTOMER", "STAFF"]
        },
        {
            path: "/profile/bookings",
            icon: "bi bi-ticket",
            label: "Lịch sử đặt tour",
            roles: ["CUSTOMER"]
        },
        {
            path: "/profile/favorites",
            icon: "bi bi-heart",
            label: "Tour yêu thích",
            roles: ["CUSTOMER"]
        },
        {
            path: "/profile/reviews",
            icon: "bi bi-star",
            label: "Đánh giá của tôi",
            roles: ["CUSTOMER"]
        },
        {
            path: "/profile/vouchers",
            icon: "bi bi-ticket-perforated",
            label: "Mã giảm giá",
            badge: 3,
            roles: ["CUSTOMER"]
        },
        {
            path: "/admin", 
            icon: "bi bi-speedometer2",
            label: "Quản lý hệ thống",
            roles: ["ADMIN"]
        }
    ];

    return links.filter(link => !link.roles || link.roles.includes(role || 'CUSTOMER'));
};