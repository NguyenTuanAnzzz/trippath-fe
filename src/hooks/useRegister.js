
import { useState } from "react";
import { register } from "../apis/authApi";
import { useNavigate } from "react-router-dom";

export default function useRegister() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            setError(
                "Mật khẩu xác nhận không khớp",
            );
            return;
        }
        if (!form.terms) {
            setError(
                "Vui lòng đồng ý với điều khoản và chính sách bảo mật",
            );
            return;
        }


        try {
            setLoading(true);
            setError();

            const data = {
                name: form.name,
                email: form.email,
                phone: form.phone,
                password: form.password,
            };

            const result = await register(data);
            if (result) {
                navigate("/verify-email", {
                    state: {
                        email: form.email,
                        expiresAt: result.expiresAt
                    }
                })
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        form,
        error,
        loading,
        handleChange,
        handleSubmit,
    };
}

