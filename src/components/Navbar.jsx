import { useState } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "A propos" },
        { href: "#cursus", label: "Cursus" },
        { href: "#skills", label: "Compétences" },
        { href: "#projects", label: "Projets" },
        { href: "#documents", label: "Documents" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden md:fixed md:top-6 md:left-1/2 md:-translate-x-1/2 md:flex md:flex-col md:items-center md:bg-slate-900 md:bg-opacity-90 md:backdrop-blur-md md:z-40 md:border md:border-cyan-400 md:border-opacity-50 md:rounded-full md:px-8 md:py-4 md:shadow-lg md:shadow-cyan-400/20">
                <div className="flex items-center justify-center gap-8">
                    <ul className="flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a 
                                    href={item.href} 
                                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="md:hidden fixed top-4 right-4 z-50">
                <button
                    onClick={toggleMenu}
                    className="flex flex-col gap-1.5 p-2 bg-slate-900 bg-opacity-90 backdrop-blur-md border border-cyan-400 border-opacity-50 rounded-lg hover:border-opacity-100 transition-all duration-300"
                >
                    <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 top-16 bg-slate-900 bg-opacity-95 backdrop-blur-md z-40">
                    <ul className="flex flex-col items-center justify-start pt-8 gap-6">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a 
                                    href={item.href} 
                                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}