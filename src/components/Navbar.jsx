import { useState, useEffect } from 'react';
import { navLinks } from '../../data';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navClicked, setNavClicked] = useState(false);
    const [scrollTimeout, setScrollTimeout] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
            setLastScrollY(currentScrollY);

            if (navClicked) {
                if (scrollTimeout) clearTimeout(scrollTimeout);
                const newTimeout = setTimeout(() => {
                    setIsVisible(false);
                    setNavClicked(false);
                }, 300);
                setScrollTimeout(newTimeout);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, [lastScrollY, navClicked, scrollTimeout]);

    const handleNavClick = () => {
        setNavClicked(true);
    };

    return (
        <header
            className={`lg:w-full w-11/12 p-6 max-w-[30rem] bg-slate-800 rounded-xl mt-8 lg:mt-16 fixed top-0 left-1/2 transform -translate-x-1/2 transition-transform duration-300 z-50 ${
                isVisible ? 'translate-y-0' : '-translate-y-[200%]'
            }`}
        >
            <nav className="flex justify-around">
                {navLinks.map(item => (
                    <a
                        key={item.id}
                        href={item.href}
                        className="text-white"
                        onClick={handleNavClick}
                    >
                        {item.name}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Navbar;
