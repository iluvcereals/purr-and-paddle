import { petsList } from '../pets';
import AvailablePets from './AvailablePets';

function AvailablePetsContainer() {
    return (
        <div className="grid grid-cols-3 h-full w-full">
            {petsList.map((pet) => {
                return <AvailablePets key={pet.id} {...pet} />;
            })}
        </div>
    );
}

export default AvailablePetsContainer;
