import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
    {
        title: "Projet Conventio",
        description: "Une application web de gestion de conventions de stage pour les étudiants de BTS.",
        technologies: ["Symfony", "PHP", "MySQL"]
    },
    {
        title: "GSB-Express",
        description: "Une API REST pour la gestion de données avec intégration GitHub et Codespace.",
        technologies: ["ExpressJS", "Postman API", "GitHub", "MongoDB", "Android Studio"]
    },
    {
        title: "Cylis",
        description: "Un site vitrine réalisé avec le Groupe SmileRepair pour la promotion de leurs services basé en Algérie.",
        technologies: ["WordPress"]
    },
    {
        title: "Projet Personnel",
        description: "Un projet personnel de développement web pour expérimenter de nouvelles technologies.",
        technologies: ["Next.JS", "TailwindCSS"]
    }
];

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
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:translate-y-1 hover:border-green-500 transition-colors transition-transform">
                            <h3 className="font-bold text-lg text-white mb-4">{project.title}</h3>
                            <p className="text-gray-300">
                                {project.description}
                            </p>
                            <div>
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full mr-2 mt-4">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}