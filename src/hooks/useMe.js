import { useState } from "react";
import { getMe } from "../apis/userApi";
import useAuth from "../contexts/AuthContext";

export default function useMe() {
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const { token, setUser } = useAuth();

    const fetchData = async () => {
        try {
            setError("")
            setLoading(true)

            const result = await getMe(token)
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