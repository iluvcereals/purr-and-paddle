import { useSelector, useDispatch } from 'react-redux';
import { FormInput, FormSelect } from '../components';
import { clearState } from '../features/adoptionSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';

const initialState = {
    type: '',
    breed: '',
    age: 'any',
    gender: 'any',
    compatibility: 'all',
};
function FindPet() {
    const dispatch = useDispatch();
    const { type, breed, age, ageOpts, gender, genderOpts, compatibility, compatibilityOpts } = useSelector(
        (store) => store.adoptionState,
    );
    const [adoptionDetails, setAdoptionDetails] = useState(initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        setAdoptionDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!adoptionDetails.type || !adoptionDetails.breed) {
            toast.error('Please fill out all fields');
            return;
        }
        // TODO: Update store after submission
        console.log(adoptionDetails);
    }

    function handleClear() {
        dispatch(clearState());
        setAdoptionDetails({ ...initialState });
    }
    return (
        <div className="w-full h-full bg-slate-100 flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white border border-black rounded-md w-1/2 min-h-2/3 p-12 shadow-md hover:shadow-xl transition-shadow"
            >
                <header className="mb-4">
                    <h1 className="font-bold text-4xl mb-1">Your Purr-fect Match Awaits!</h1>
                    <p className="text-gray-500">Find your new companion.</p>
                </header>
                <FormInput type="text" name="type" value={adoptionDetails.type} handleChange={handleChange} />
                <FormInput type="text" name="breed" value={adoptionDetails.breed} handleChange={handleChange} />
                <FormSelect name="age" options={ageOpts} value={adoptionDetails.age} handleChange={handleChange} />
                <FormSelect
                    name="gender"
                    options={genderOpts}
                    value={adoptionDetails.gender}
                    handleChange={handleChange}
                />
                <FormSelect
                    name="compatibility"
                    options={compatibilityOpts}
                    value={adoptionDetails.compatibility}
                    handleChange={handleChange}
                />
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

export default FindPet;
