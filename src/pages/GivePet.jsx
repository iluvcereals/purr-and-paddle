import { customFetch } from '../customUrl';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FormInput, FormSelect } from '../components';
import { clearState } from '../features/giveAwaySlice';
import { redirect } from 'react-router-dom';

export const loader = (store) => () => {
    const user = store.getState().userState.username;
    if (!user) {
        toast.error('Please login');
        return redirect('/login');
    }
    return null;
};
const initialState = {
    type: 'dog',
    breed: 'Labrador Retriever',
    age: 'young',
    gender: 'male',
    compatibility: 'dog',
    ownerName: '',
    ownerEmail: '',
    description: '',
};
function GivePet() {
    const { typeOpts, breedOpts, ageOpts, genderOpts, compatibilityOpts } = useSelector((store) => store.giveAwayState);
    const { username } = useSelector((store) => store.userState);
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

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(petDetails);
        if (
            !petDetails.type ||
            !petDetails.breed ||
            !petDetails.compatibility ||
            !petDetails.ownerName ||
            !petDetails.ownerEmail ||
            !petDetails.description
        ) {
            toast.error('Please fill out all fields');
            return;
        }

        if (!isValidEmail(petDetails.ownerEmail)) {
            toast.error('Please enter a valid email address');
            return;
        }

        try {
            const response = await customFetch.post('/app/add-pet', petDetails);
            toast.success(response.data.msg);
            dispatch(clearState());
            setPetDetails({ ...initialState });
        } catch (error) {
            console.error('Error adding pet:', error);
            toast.error('Failed to add pet. Please try again.');
        }
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
                <div className="grid grid-cols-2 gap-x-4">
                    <FormSelect name="type" options={typeOpts} value={petDetails.type} handleChange={handleChange} />
                    <FormSelect name="breed" options={breedOpts} value={petDetails.breed} handleChange={handleChange} />
                    <FormSelect name="age" options={ageOpts} value={petDetails.age} handleChange={handleChange} />
                    <FormSelect
                        name="gender"
                        options={genderOpts}
                        value={petDetails.gender}
                        handleChange={handleChange}
                    />
                    <FormSelect
                        label="compatibility"
                        name="compatibility"
                        options={compatibilityOpts}
                        value={petDetails.compatibility}
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
                        name="description"
                        value={petDetails.description}
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
