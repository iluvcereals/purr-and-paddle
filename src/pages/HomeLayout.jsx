import { NavLinks, DateAndTime } from '../components';
import { Outlet } from 'react-router-dom';

function HomeLayout() {
    return (
        <div className="flex flex-col h-screen">
            <section className="flex-1 flex">
                <nav className="w-[13rem] bg-slate-200">
                    <h1>LOGO</h1>
                    <DateAndTime />
                    <NavLinks />
                </nav>
                <div className="flex-1 flex flex-col">
                    <header className="w-full">Header</header>
                    <section className="flex-1 p-8">
                        <Outlet />
                    </section>
                </div>
            </section>
            <footer className="w-full bg-yellow-300">Footer</footer>
        </div>
    );
}

export default HomeLayout;
