import { useEffect } from "react";

export default function Alert({ variant = "info", message, onClose }) {
    const styles = {
        success: "bg-green-50 text-green-800 border-green-200",
        error: "bg-red-50 text-red-800 border-red-200",
        warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
        info: "bg-blue-50 text-blue-800 border-blue-200",
    };

    const icons = {
        success: "bi-check-circle-fill",
        error: "bi-x-circle-fill",
        warning: "bi-exclamation-triangle-fill",
        info: "bi-info-circle-fill",
    };

    useEffect(() => {
        if (!onClose) return;
        const timer = setTimeout(() => {
            onClose()
        }, 5000)
        return () => clearTimeout(timer)
    }, [onClose]);

    return (
        <div className={`flex items-center gap-2 px-4 py-3 rounded-lg border ${styles[variant]}`}>
            <i className={`bi ${icons[variant]}`}></i>
            <span className="text-sm flex-1">{message}</span>
            {onClose && (
                <button
                    onClick={onClose}
                    className="ml-2 hover:opacity-70 cursor-pointer"
                >
                    <i className="bi bi-x"></i>
                </button>
            )}
        </div>
    );
}
