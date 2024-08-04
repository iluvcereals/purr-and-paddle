function FormInput({ type, label, name, value, handleChange }) {
    return (
        <div className="flex flex-col mb-2">
            <label htmlFor={name} className="capitalize text-gray-500 mb-1.5">
                {label ? label : name}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                className="border border-black h-12 w-full rounded-md outline-none px-2"
            />
        </div>
    );
}

export default FormInput;
