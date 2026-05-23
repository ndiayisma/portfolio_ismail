import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
    {
        title: "Projet Conventio",
        description: "Une application web de gestion de conventions de stage pour les étudiants de BTS.",
        technologies: ["Symfony", "PHP", "MySQL"],
        image: "/ExempleConventio.png",
        link: "https://github.com/maxervj/Conventio"
    },
    {
        title: "GSB-Express",
        description: "Une API REST pour la gestion de données avec intégration GitHub et Codespace.",
        technologies: ["ExpressJS", "Postman API", "GitHub", "MongoDB", "Android Studio"],
        image: "/GSB.png",
        link: "https://github.com/ndiayisma/api-rest-gsb"
    },
    {
        title: "Cylis",
        description: "Un site vitrine réalisé avec le Groupe SmileRepair pour la promotion de leurs services basé en Algérie.",
        technologies: ["WordPress"],
        image: "/ExempleCylis.png",
        link: "https://cylis.net"
    },
    {
        title: "Projet Personnel",
        description: "Un projet personnel de développement web servant de guide et glossaires pour les débutants dans la communauté FGC (Tekken, Street Fighter )(Fighting Game Community).",
        technologies: ["Next.JS", "TailwindCSS"],
        image: "/TeaserProjetPerso.jpeg",
        link: "https://github.com/ndiayisma/ism-fgc-glossary"
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
                        <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                            <div className="relative bg-slate-900 border-2 mb-5 rounded-lg overflow-hidden cursor-pointer h-full group project-card">
                                {/* Reflet holographique */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{animation: "holoReflex 2s ease-in-out infinite"}}></div>
                                </div>

                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                                <div className="p-6 relative z-10">
                                    <h3 className="font-bold text-lg text-white mb-4">{project.title}</h3>
                                    <p className="text-gray-300">
                                        {project.description}
                                    </p>
                                    <div>
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} className="inline-block bg-cyan-500/50 text-white text-xs px-2 py-1 rounded-full mr-2 mt-4 border border-cyan-400/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}