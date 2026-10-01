import { useState } from "react";
import { getMe } from "../apis/userApi";
import useAuth from "../contexts/AuthContext";
import useFetchWithAuth from "./useFetchWithAuth";

export default function useMe() {
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const { setUser } = useAuth();
    const fetchWithAuth = useFetchWithAuth();

    const fetchData = async () => {
        try {
            setError("")
            setLoading(true)

            const result = await fetchWithAuth(getMe)
            if (result) {
                setUser(result)
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    };

    return { error, loading, fetchData }
}