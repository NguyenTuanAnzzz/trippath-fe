import { useState } from "react";
import { login } from "../apis/authApi";
import { useNavigate } from "react-router-dom";
import useAuth from "../contexts/AuthContext";

export default function useLogin() {
    const [form, setForm] = useState({ email: "", password: "" })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { setToken } = useAuth();
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { value, name } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            setError("")
            const result = await login(form)
            if (result) {
                setToken(result.accessToken)
                navigate("/")
            }

        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return {
        form,
        error,
        loading,
        handleChange,
        handleSubmit
    }
}