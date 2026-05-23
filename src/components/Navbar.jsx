import { useState, useEffect } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollOpacity, setScrollOpacity] = useState(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Calcul de l'opacité basée sur le scroll (0 à 1)
            // À 0px = 0, à 100px = 1
            const scrollY = window.scrollY;
            const opacity = Math.min(scrollY / 100, 1);
            setScrollOpacity(opacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: "#about", label: "A propos" },
        //{ href: "#cursus", label: "Cursus" },
        { href: "#skills", label: "Compétences" },
        { href: "#projects", label: "Projets" },
        { href: "#documents", label: "Documents" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <nav 
                className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
                style={{
                    backgroundColor: `rgba(15, 23, 42, ${scrollOpacity * 0.95})`,
                    backdropFilter: scrollOpacity > 0.1 ? 'blur(8px)' : 'none'
                }}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-white font-semibold text-lg">
                            Ismail
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a 
                                    href={item.href} 
                                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                    >
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-slate-900 border-t border-gray-700">
                        <ul className="flex flex-col px-6 py-4 gap-4">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a 
                                        href={item.href} 
                                        className="text-gray-300 hover:text-white transition-colors duration-200 block py-2"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>

            {/* Spacer for fixed navbar */}
            <div className="h-16 bg-slate-950" />
        </>
    );
}