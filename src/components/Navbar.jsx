import { navLinks } from '../../data';

const Navbar = () => {
    return (
        <header
        className="w-full p-6 max-w-xl bg-slate-800 rounded-xl mt-16"
        >
            <nav className="flex justify-around">
                {navLinks.map(item => (
                    <a
                        key={item.id}
                        href={item.href}
                        className="text-white-100"
                    >
                        {item.name}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Navbar;
