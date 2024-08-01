import { NavLinks } from '../components';
import { Outlet } from 'react-router-dom';

function HomeLayout() {
    return (
        <div className="flex flex-col h-screen">
            <header className="w-full bg-green-200">Header</header>
            <section className="flex-1 flex">
                <nav className="w-1/5 bg-red-50">
                    <NavLinks />
                </nav>
                <Outlet />
            </section>
            <footer className="w-full bg-yellow-300">Footer</footer>
        </div>
    );
}

export default HomeLayout;
