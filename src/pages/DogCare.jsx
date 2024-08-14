import dog from '../assets/happy-dog.jpg';
import { CareStep } from '../components';
import { dogCareDescriptions } from '../utils';

function DogCare() {
    return (
        <div className="flex justify-center h-full bg-slate-100">
            <div className="grid grid-cols-2 gap-4 bg-white rounded-md w-full h-[75%] p-12 shadow-md hover:shadow-xl transition-shadow">
                <div>
                    <header className="mb-4">
                        <h1 className="font-bold text-3xl tracking-wide mb-1">Welcome to Dog Care 101 🐶</h1>
                        <p className="text-gray-500 text-lg">Keeping your furry friend happy and healthy.</p>
                    </header>
                    <div>
                        <h2 className="mb-2 font-bold text-xl">Daily Care: The Essentials 🐕</h2>
                        {dogCareDescriptions.map((dogCare, index) => {
                            return <CareStep {...dogCare} key={index} />;
                        })}
                    </div>
                </div>
                <img src={dog} alt="dog" className="h-full w-full rounded-lg" />
            </div>
        </div>
    );
}

export default DogCare;
