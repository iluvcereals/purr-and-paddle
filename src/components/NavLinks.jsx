import { links } from '../utils';
import { NavLink } from 'react-router-dom';

function NavLinks() {
    return (
        <div className="flex flex-col gap-y-6 mt-5 text-slate-700">
            {links.map(({ id, text, url, icon }) => {
                return (
                    <NavLink
                        to={url}
                        key={id}
                        className={({ isActive }) => {
                            return isActive
                                ? 'px-4 text-black translate-x-4 flex gap-x-5'
                                : 'px-4 hover:translate-x-2 transition-transform duration-300 flex gap-x-5';
                        }}
                    >
                        <span>{icon}</span>
                        {text}
                    </NavLink>
                );
            })}
        </div>
    );
}

export default NavLinks;
