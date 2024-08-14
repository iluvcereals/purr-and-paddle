import { customFetch } from '../customUrl';
import { useSelector, useDispatch } from 'react-redux';
import { setAvailablePets } from '../features/adoptionSlice';
import AvailablePets from './AvailablePets';
import { toast } from 'react-toastify';

function AvailablePetsContainer() {
    const { availablePets, isClear } = useSelector((store) => store.adoptionState);
    const dispatch = useDispatch();

    async function getPets() {
        try {
            const response = await customFetch.get('/app/get-pets');
            dispatch(setAvailablePets(response.data.pets));
        } catch (error) {
            toast.error('Failed to fetch available pets');
            console.error(error);
        }
    }
    if (availablePets.length === 0) {
        getPets();
    }

    return (
        <div className="grid gap-4 h-full w-full md:grid-cols-2 lg:grid-cols-3">
            {availablePets.length > 0 ? (
                availablePets.map((pet) => <AvailablePets key={pet.id} {...pet} />)
            ) : (
                <p>No pets available based on your selection.</p>
            )}{' '}
        </div>
    );
}

export default AvailablePetsContainer;
