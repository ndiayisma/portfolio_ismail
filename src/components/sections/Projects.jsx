import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-16">
            <RevealOnScroll>
            <div className="max-w-4xl">
                <h2 className="text-4xl font-bold text-green-400 mb-8 text-center">Mes Projets</h2>
                <p className="text-lg text-gray-300 leading-relaxed text-center">
                    Voici quelques-uns de mes projets récents sur lesquels j'ai travaillé.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:translate-y-1 hover:border-green-500 transition-colors">
                        <h3 className="font-bold text-lg text-white mb-4">Projet Conventio</h3>
                        <p className="text-gray-300">
                            Une application web de gestion de conventions de stage pour les étudiants de BTS. 
                        </p>
                        <div>
                            {["Symfony", "PhP", "MySQL"].map((tech, index) => (
                                <span key={index} className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full mr-2 mt-4">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}