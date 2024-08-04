import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FormInput, FormSelect } from '../components';
import { clearState } from '../features/giveAwaySlice';

const initialState = {
    type: '',
    breed: '',
    age: '0-6 months',
    gender: 'boy',
    catCompatibility: 'not sure',
    dogCompatibility: 'not sure',
    childCompatibility: 'not sure',
    ownerName: '',
    ownerEmail: '',
    petDescription: '',
};
function GivePet() {
    const {
        type,
        breed,
        age,
        gender,
        catCompatibility,
        dogCompatibility,
        childCompatibility,
        ownerName,
        petDescription,
        ageOpts,
        genderOpts,
        compatibilityOpts,
    } = useSelector((store) => store.giveAwayState);

    const dispatch = useDispatch();
    const [petDetails, setPetDetails] = useState(initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        setPetDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (
            !petDetails.type ||
            !petDetails.breed ||
            !petDetails.ownerName ||
            !petDetails.ownerEmail ||
            !petDetails.petDescription
        ) {
            toast.error('Please fill out all fields');
            return;
        }

        if (!isValidEmail(petDetails.ownerEmail)) {
            toast.error('Please enter a valid email address');
            return;
        }

        // TODO: Handle submission in the store
        console.log(petDetails);
    }

    function handleClear() {
        dispatch(clearState());
        setPetDetails({ ...initialState });
    }

    return (
        <div className="w-full h-full bg-slate-100 flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white border border-black rounded-md w-2/3 min-h-2/3 p-12 shadow-md hover:shadow-xl transition-shadow"
            >
                <header className="mb-4">
                    <h1 className="font-bold text-4xl mb-1">Rehoming Made Easy </h1>
                    <p className="text-gray-500">Rehome your pet today.</p>
                </header>
                <div>
                    <FormInput type="text" name="type" value={petDetails.type} handleChange={handleChange} />
                    <FormInput type="text" name="breed" value={petDetails.breed} handleChange={handleChange} />
                </div>
                <div className="grid grid-cols-2 gap-x-4">
                    <FormSelect name="age" options={ageOpts} value={petDetails.age} handleChange={handleChange} />
                    <FormSelect
                        name="gender"
                        options={genderOpts}
                        value={petDetails.gender}
                        handleChange={handleChange}
                    />
                    <FormSelect
                        label="gets along with other cats"
                        name="catCompatibility"
                        options={compatibilityOpts}
                        value={petDetails.catCompatibility}
                        handleChange={handleChange}
                    />
                    <FormSelect
                        label="gets along with other dogs"
                        name="dogCompatibility"
                        options={compatibilityOpts}
                        value={petDetails.dogCompatibility}
                        handleChange={handleChange}
                    />
                    <FormSelect
                        label="suitable for families with small children"
                        name="childCompatibility"
                        options={compatibilityOpts}
                        value={petDetails.childCompatibility}
                        handleChange={handleChange}
                    />
                </div>
                <div>
                    <FormInput
                        type="text"
                        label="current owner's name"
                        name="ownerName"
                        value={petDetails.ownerName}
                        handleChange={handleChange}
                    />
                    <FormInput
                        type="email"
                        label="current owner's email"
                        name="ownerEmail"
                        value={petDetails.ownerEmail}
                        handleChange={handleChange}
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label htmlFor="petDescription" className="capitalize text-gray-500 mb-1.5">
                        tell us about your pet
                    </label>
                    <textarea
                        rows="2"
                        cols="20"
                        name="petDescription"
                        value={petDetails.petDescription}
                        onChange={handleChange}
                        className="border border-black h-16 w-full rounded-md outline-none p-2"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <button
                        type="submit"
                        className="block border border-black rounded-md h-12 bg-black text-white hover:bg-gray-700 transition duration-300"
                    >
                        Submit
                    </button>
                    <button
                        onClick={handleClear}
                        type="reset"
                        className="block border border-black rounded-md h-12 hover:bg-gray-200 transition duration-300 "
                    >
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
}

export default GivePet;
