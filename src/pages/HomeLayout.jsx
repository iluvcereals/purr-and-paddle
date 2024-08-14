import { NavLinks, DateAndTime } from '../components';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../features/userSlice';
import { toast } from 'react-toastify';

function HomeLayout() {
    const username = useSelector((store) => store.userState.username);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        toast.success('Logged out successfully');
        navigate('/');
    };
    return (
        <div className="flex flex-col h-screen">
            <section className="flex flex-1">
                <nav className="hidden md:block w-[13rem] bg-slate-100">
                    <div className="h-20 p-4 flex justify-center items-center">
                        <Link to="/" className="border-b border-black w-full p-4 flex justify-center items-center">
                            <h1 className="tracking-tight text-sm font-bold">purr & paddle</h1>
                            <img src={logo} alt="logo" className="h-12 w-12 " />
                        </Link>
                    </div>
                    <NavLinks />
                </nav>
                <div className="flex-1 flex flex-col bg-slate-100">
                    <header className="flex items-center justify-between bg-slate-100 p-4">
                        <div className="flex flex-grow mr-4">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full h-12 border border-black bg-white rounded-l-md px-4 outline-none focus:shadow-lg transition-shadow"
                            />
                            <button className="h-12 bg-black text-white rounded-r-md px-4 border border-black hover:bg-gray-700 transition duration-300">
                                Search
                            </button>
                        </div>
                        <DateAndTime />
                        <div>
                            {username && (
                                <button
                                    onClick={handleLogout}
                                    className="h-8 bg-black text-white rounded-md px-4 border border-black hover:bg-gray-700 transition duration-300"
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </header>
                    <section className="flex-1 p-12 border-l border-black min-h-screen">
                        <Outlet />
                    </section>
                </div>
            </section>
            <footer className="bg-slate-200 py-6">
                <div className="container mx-auto text-center">
                    <h2 className="text-lg font-bold mb-2">🐾 Purr & Paddle 🐾</h2>
                    <p className="text-gray-600 mb-2">Your trusted source for pet adoption and care.</p>
                    <ul className="text-gray-500 text-sm space-y-1">
                        <li>© {new Date().getFullYear()} Purr & Paddle. All rights reserved.</li>
                        <li>
                            <Link to="/" className="hover:underline">
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:underline">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:underline">
                                Disclaimer
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:underline">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <p className="text-gray-400 text-xs mt-4">
                        *Adoption fees and policies may vary. Please contact us for more information.
                    </p>
                </div>
            </footer>{' '}
        </div>
    );
}

export default HomeLayout;
