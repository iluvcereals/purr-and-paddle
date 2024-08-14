import { FindPetForm, AvailablePetsContainer } from '../components';
function FindPet() {
    return (
        <div className="grid gap-8">
            <FindPetForm />
            <AvailablePetsContainer />
        </div>
    );
}

export default FindPet;
