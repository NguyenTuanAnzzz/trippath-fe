export default function InputField({
    label,
    id,
    name,
    type,
    placeholder,
    icon,
    value,
    onChange,
    readOnly,
    disabled,
    className,
    ...rest
}) {
    return (
        <div>
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-onyx mb-1.5"
                >
                    {label}
                </label>
            )}

            <div className="relative">
                {icon && (
                    <i
                        className={`bi ${icon} absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400`}
                    ></i>
                )}

                <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    disabled={disabled}
                    className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3 rounded-lg border text-onyx text-sm placeholder-gray-400 outline-none transition-shadow focus:border-tuscan-sun ${readOnly ? 'bg-platinum border-gray-200 cursor-default' : 'bg-white border-gray-300 focus:ring-4 focus:ring-tuscan-sun/10'} ${className || ''}`}
                    {...rest}
                />
            </div>
        </div>
    );
}