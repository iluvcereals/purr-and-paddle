function AvailablePets({
    id,
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
        <div className="h-[24rem] w-[18rem] bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
            <img src={img} alt={type} className="h-[14rem] w-full object-cover" />
            <div className="p-4 flex-grow">
                <h2 className="text-lg font-semibold">{breed}</h2>
                <p className="text-gray-600">Type: {type}</p>
                <p className="text-gray-600">Age: {age} years</p>
                <p className="text-gray-600">Gender: {gender}</p>
                <p className="text-gray-600">Owner: {ownerName}</p>
                <p className="text-gray-600">Email: {ownerEmail}</p>
                <p className="text-gray-600">Description: {description}</p>
            </div>
        </div>
    );
}

export default AvailablePets;
