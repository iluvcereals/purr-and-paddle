import { petsList } from '../pets';
import AvailablePets from './AvailablePets';

function AvailablePetsContainer() {
    return (
        <div className="grid gap-8 h-full w-full md:grid-cols-2 lg:grid-cols-3">
            {petsList.map((pet) => {
                return <AvailablePets key={pet.id} {...pet} />;
            })}
        </div>
    );
}

export default AvailablePetsContainer;
