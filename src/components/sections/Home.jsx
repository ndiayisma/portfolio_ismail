import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center relative bg-black">
            <RevealOnScroll>
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold gradient-text leading-relaxed text-cyan-400 mb-4">
                        Bienvenue sur mon portfolio
                    </h1>
                    <p className="text-lg text-gray-300 mb-8">
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