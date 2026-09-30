import { useState } from "react";
import { refreshToken } from "../apis/authApi";
import useAuth from "../contexts/AuthContext";

export default function useRefresh() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const { setToken } = useAuth();

    const handleRefresh = async () => {
        try {
            setLoading(true);
            setError("");

            const result = await refreshToken();

            if (!result?.accessToken) {
                throw new Error("Không thể làm mới access token");
            }

            setToken(result.accessToken);

            return result.accessToken;

        } catch (error) {
            setError(error.message);
            throw error;

        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        handleRefresh,
    };
}