export default function ButtonField({
    bg,
    hover,
    icon,
    children,
    type = "button",
    disabled = false,
    onClick
}) {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`w-full py-3 px-4 border border-gray-300 rounded-lg ${bg} ${hover} flex items-center justify-center gap-2 transition-colors cursor-pointer`}
        >
            {icon && (
                <i className={`bi ${icon}`}></i>
            )}

            <span className="text-sm font-medium text-onyx">
                {children}
            </span>
        </button>
    )
}

