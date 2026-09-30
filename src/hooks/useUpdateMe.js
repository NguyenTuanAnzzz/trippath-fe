import { useState, useEffect } from "react";
import { updateMe } from "../apis/userApi";
import useAuth from "../contexts/AuthContext";

export default function useUpdateMe() {
    const { user, token, setUser } = useAuth()
    const [form, setForm] = useState({ name: user?.name || "", phone: user?.phone || "", avatar: user?.avatar || "" });
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState();

    useEffect(() => {
        if (user) {
            setForm({ name: user.name || "", phone: user.phone || "", avatar: user.avatar || "" });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name == 'avatar') {
            setForm({ ...form, avatar: files[0] })
            return;
        }
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();

        if (!form.name || !form.name.trim()) {
            setError("Họ và tên không được để trống");
            return false;
        }

        if (!form.phone || !form.phone.trim()) {
            setError("Số điện thoại không được để trống");
            return false;
        }

        try {
            setError("");
            setMessage("");
            setLoading(true);

            const formData = new FormData()
            formData.set("name", form.name)
            formData.set("phone", form.phone)
            if (form.avatar instanceof File) {
                formData.set("avatar", form.avatar);
            }
            const result = await updateMe(token, formData)
            if (result) {
                setMessage("Cập nhật thông tin thành công");
                setUser(result);
                return true;
            }
        } catch (error) {
            setError(error.message)
            return false;
        } finally {
            setLoading(false)
        }
    }
    return { form, setForm, error, message, loading, handleChange, handleSubmit }
}