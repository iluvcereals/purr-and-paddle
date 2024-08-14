import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/astro-cat.svg';
function Landing() {
    const navigate = useNavigate();
    return (
        <div className="grid grid-cols-2 gap-4 bg-white border border-black rounded-md w-full p-12 ">
            <div>
                <h1 className="font-bold text-6xl tracking-wide leading-snug mb-8">
                    Your New Furry Friend is Just a Click Away
                </h1>
                <p className="text-gray-500 text-2xl tracking-wide leading-normal">
                    Finding a new friend has never been so fun! With a lineup of adorable dogs and charming cats ready
                    for their forever homes, it’s easy to find the perfect match. Whether it’s a tail-wagging puppy or a
                    purring kitty, the journey to new companionship starts here. Dive into the world of paws, whiskers,
                    and wagging tails – and discover the joy of bringing home a pet that will make every day brighter!{' '}
                </p>
                <div className="mt-12 min-h-[4rem] flex">
                    <button
                        className="w-[9rem] text-[20px] rounded-md outline-none border border-black bg-black text-white cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-gray-700"
                        onClick={() => navigate('/signup')}
                    >
                        Get Started
                    </button>
                    <button
                        className="w-[9rem] text-[20px] rounded-md outline-none border-none bg-transparent cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden hover:text-[22px]"
                        onClick={() => navigate('/contact')}
                    >
                        Contact Us
                    </button>
                </div>
            </div>
            <img src={heroImg} alt="space-cat" />
        </div>
    );
}

export default Landing;
