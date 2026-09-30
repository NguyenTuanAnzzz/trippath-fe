import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyEmail } from "../apis/authApi";

export default function useVerifyEmail() {
    const [otps, setOtps] = useState(["", "", "", "", "", ""]);
    const [form, setForm] = useState({
        email: "",
        otp: ""
    });
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email;
    const expiresAt = location.state?.expiresAt
    const handleChange = (e, index) => {
        const value = e.target.value.toUpperCase();

        setOtps((prev) => {
            const newOtps = [...prev]
            newOtps[index] = value;
            return newOtps;
        })
    };

    const handlePaste = (e, index) => {
        e.preventDefault();

        const value = e.clipboardData
            .getData("text")
            .trim()
            .toUpperCase();

        setOtps(prev => {
            const newOtps = [...prev];

            value.split("").forEach((char, i) => {
                if (index + i < newOtps.length) {
                    newOtps[index + i] = char;
                }
            });

            return newOtps;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError();
            
            const currentOtp = otps.join("");
            const data = { email: email, otp: currentOtp };
            setForm(data);

            const result = await verifyEmail(data);
            if (result) {
                navigate('/login');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return {
        email,
        form,
        error,
        loading,
        otps,
        expiresAt,
        handleChange,
        handlePaste,
        handleSubmit,
    };

}