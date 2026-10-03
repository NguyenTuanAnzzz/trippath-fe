import useAuth from "../contexts/AuthContext.jsx";
import useRefresh from "./useRefresh.js";

export default function useFetchWithAuth() {
    const { token, setToken } = useAuth();
    const { handleRefresh } = useRefresh();

    const fetchWithAuth = async (apiFunction, ...args) => {
        try {
            // Gọi API lần đầu bằng access token hiện tại
            console.log("ACCESS TOKEN:", token);
            return await apiFunction(token, ...args);

        } catch (error) {
            // Không phải lỗi 401 → ném lỗi ra ngoài
            if (error.status !== 401) {
                throw error;
            }

            // Access token hết hạn → refresh
            const newToken = await handleRefresh();

            // Refresh thất bại
            if (!newToken) {
                throw new Error(
                    "Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại."
                );
            }

            // Lưu access token mới
            setToken(newToken);

            // Gọi lại API ban đầu bằng token mới
            return await apiFunction(newToken, ...args);
        }
    };

    return fetchWithAuth;
}