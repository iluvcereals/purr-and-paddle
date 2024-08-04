function FormSelect({ name, label, options, value, handleChange }) {
    return (
        <div className="flex flex-col mb-2">
            <label htmlFor={name} className="capitalize text-gray-500 mb-1.5">
                {label ? label : name}
            </label>
            <select
                name={name}
                id={name}
                onChange={handleChange}
                value={value}
                className="bg-white border border-black h-12 w-full rounded-md outline-none px-2"
            >
                {options.map((opt, index) => {
                    return (
                        <option value={opt} key={index}>
                            {opt}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default FormSelect;
