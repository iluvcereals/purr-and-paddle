function CareStep({ title, description }) {
    return (
        <div className="border-t border-black pt-2 pb-2 w-full">
            <h3 className="capitalize -mb-1 font-bold">{title}:</h3>
            <p className="text-gray-500 t">{description}</p>
        </div>
    );
}

export default CareStep;
