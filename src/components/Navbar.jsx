import { useState, useEffect } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollOpacity, setScrollOpacity] = useState(0);
    const [activeSection, setActiveSection] = useState('home');

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

            // Déterminer la section active
            const sections = ['home', 'about', 'skills', 'projects', 'documents', 'contact'];
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
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
                        {navItems.map((item) => {
                            const sectionId = item.href.substring(1); // Enlever le #
                            const isActive = activeSection === sectionId;
                            return (
                                <li key={item.href}>
                                    <a 
                                        href={item.href} 
                                        className={`transition-all duration-200 text-sm font-medium ${
                                            isActive 
                                                ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' 
                                                : 'text-gray-300 hover:text-cyan-300'
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
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
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="bg-gradient-to-b from-slate-900/95 to-slate-950/95 backdrop-blur-md border-t-2 border-cyan-400/30 border-b border-cyan-400/20">
                        <ul className="flex flex-col px-6 py-6 gap-3">
                            {navItems.map((item, index) => {
                                const sectionId = item.href.substring(1); // Enlever le #
                                const isActive = activeSection === sectionId;
                                return (
                                    <li key={item.href} style={{
                                        animation: isOpen ? `slideInLeft 0.3s ease-out ${index * 0.05}s both` : 'none'
                                    }}>
                                        <a 
                                            href={item.href} 
                                            className={`block px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium ${
                                                isActive 
                                                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-l-2 border-cyan-400 shadow-lg shadow-cyan-400/20' 
                                                    : 'text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 border-l-2 border-transparent'
                                            }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Spacer for fixed navbar */}
            <div className="h-16 bg-slate-950" />
        </>
    );
}