import { useSelector, useDispatch } from 'react-redux';
import { FormSelect } from '../components';
import { clearState, setAvailablePets } from '../features/adoptionSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { customFetch } from '../customUrl';

const initialState = {
    petType: 'dog',
    petBreed: 'Labrador Retriever',
    petAge: 'young',
    petGender: 'male',
    petCompatibility: 'dog',
};
function FindPetForm() {
    const dispatch = useDispatch();
    const { typeOpts, breedOpts, ageOpts, genderOpts, compatibilityOpts } = useSelector((store) => store.adoptionState);
    const [adoptionDetails, setAdoptionDetails] = useState(initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        setAdoptionDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await customFetch.get('/app/get-filtered-pets', {
                params: {
                    petType: adoptionDetails.petType,
                    petBreed: adoptionDetails.petBreed,
                    petAge: adoptionDetails.petAge,
                    petGender: adoptionDetails.petGender,
                    petCompatibility: adoptionDetails.petCompatibility,
                },
            });
            dispatch(setAvailablePets(response.data.pets));
            toast.success('Available pets fetched successfully!');
        } catch (error) {
            toast.error('No matches found');
            console.error(error);
        }
    }

    function handleClear() {
        dispatch(clearState());
        setAdoptionDetails({ ...initialState });
    }
    return (
        <div className="w-full bg-slate-100 flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white border border-black rounded-md w-full min-h-2/3 p-12 shadow-md hover:shadow-xl transition-shadow"
            >
                <header className="mb-4">
                    <h1 className="font-bold text-4xl mb-1">Your Purr-fect Match Awaits!</h1>
                    <p className="text-gray-500">Find your new companion.</p>
                </header>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <FormSelect
                        label="type"
                        name="petType"
                        options={typeOpts}
                        value={adoptionDetails.type}
                        handleChange={handleChange}
                    />
                    <FormSelect
                        label="breed"
                        name="petBreed"
                        options={breedOpts}
                        value={adoptionDetails.breed}
                        handleChange={handleChange}
                    />
                    <FormSelect
                        label="age"
                        name="petAge"
                        options={ageOpts}
                        value={adoptionDetails.age}
                        handleChange={handleChange}
                    />
                    <FormSelect
                        label="gender"
                        name="petGender"
                        options={genderOpts}
                        value={adoptionDetails.gender}
                        handleChange={handleChange}
                    />
                    <FormSelect
                        label="compatibility"
                        name="petCompatibility"
                        options={compatibilityOpts}
                        value={adoptionDetails.compatibility}
                        handleChange={handleChange}
                    />
                    <div className="grid grid-cols-2 gap-2 mt-8">
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
                </div>
            </form>
        </div>
    );
}

export default FindPetForm;
