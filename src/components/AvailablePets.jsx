function AvailablePets({
    type,
    img,
    breed,
    age,
    gender,
    dogCompatible,
    catCompatible,
    childCompatible,
    ownerName,
    ownerEmail,
    description,
}) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
            <img src={img} alt={type} className="h-[24rem] w-full object-cover" />
            <div className="p-4 flex-grow">
                <h2 className="text-3xl font-semibold">{breed}</h2>
                <div className="grid grid-cols-2 gap-2">
                    <p className="text-gray-800">
                        <span className="font-semibold text-gray-600">Type:</span> {type}
                    </p>
                    <p className="text-gray-800">
                        <span className="font-semibold text-gray-600">Age:</span> {age} years
                    </p>
                    <p className="text-gray-800">
                        <span className="font-semibold text-gray-600">Gender:</span> {gender}
                    </p>
                    <p className="text-gray-800">
                        <span className="font-semibold text-gray-600">Dog Compatible:</span> {dogCompatible}
                    </p>
                    <p className="text-gray-800">
                        <span className="font-semibold text-gray-600">Cat Compatible:</span> {catCompatible}
                    </p>
                    <p className="text-gray-800">
                        <span className="font-semibold text-gray-600">Child Compatible:</span> {childCompatible}
                    </p>
                </div>
                <div className="mt-4">
                    <p className="text-gray-800">
                        <span className="font-semibold text-gray-600">Owner:</span> {ownerName}
                    </p>
                    <p className="text-gray-800">
                        <span className="font-semibold text-gray-600">Email:</span> {ownerEmail}
                    </p>
                    <p className="text-gray-800">
                        <span className="font-semibold text-gray-600">Description:</span> {description}
                    </p>
                </div>
            </div>
            <button className="bg-black text-white font-semibold py-2 rounded-md m-4 hover:bg-gray-700 transition duration-300">
                Interested
            </button>
        </div>
    );
}

export default AvailablePets;
