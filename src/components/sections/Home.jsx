import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center relative">
            {/* Holographic background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
            
            <RevealOnScroll>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-7xl font-bold heading-gradient leading-relaxed text-cyan-400 mb-4 michroma">
                        NDIAYE Ismail
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-blue-400 to-transparent mb-8"></div>
                    <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent mb-8">
                        Développeur Web & Étudiant en BTS SIO
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                        En tant que développeur passionné par la programmation et étudiant en 2e année de BTS SIO à ce jour,
                        mon parcours se focalise sur l'univers dynamique du développement web, les technologies backend et la conception de logiciels.
                        Je suis toujours à la recherche de nouveaux défis et
                        d'opportunités pour apprendre davantage et grandir dans ce domaine en constante évolution.
                    </p>
                </div>
            </RevealOnScroll>
        </section>
    );
}