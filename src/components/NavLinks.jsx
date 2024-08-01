import { links } from '../utils';
import { NavLink } from 'react-router-dom';

function NavLinks() {
    return (
        <nav className="flex flex-col gap-y-6 mt-5 text-slate-600">
            {links.map(({ id, text, url, icon }) => {
                return (
                    <NavLink
                        to={url}
                        key={id}
                        className={({ isActive }) => {
                            return isActive
                                ? 'text-black translate-x-2 flex gap-x-5'
                                : 'hover:translate-x-2 transition-transform duration-300 flex gap-x-5';
                        }}
                    >
                        <span>{icon}</span>
                        {text}
                    </NavLink>
                );
            })}
        </nav>
    );
}

export default NavLinks;
