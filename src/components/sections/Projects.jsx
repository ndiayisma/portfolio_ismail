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
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-16 relative">
            {/* Holographic background elements */}
            <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
            
            <RevealOnScroll>
            <div className="max-w-4xl relative z-10">
                <h2 className="text-4xl font-bold michroma text-cyan-400 mb-4 text-center">Mes Projets</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-blue-400 to-transparent mx-auto mb-8"></div>
                <p className="text-lg text-gray-300 leading-relaxed text-center mb-12">
                    Voici quelques-uns de mes projets récents sur lesquels j'ai travaillé.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {projects.map((project, index) => (
                        <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
                            <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border-2 mb-5 rounded-lg overflow-hidden cursor-pointer h-full project-card">
                                {/* Reflet holographique */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{animation: "holoReflex 2s ease-in-out infinite"}}></div>
                                </div>

                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover relative z-10" />
                                <div className="p-6 relative z-10">
                                    <h3 className="font-bold text-lg text-cyan-300 mb-4">{project.title}</h3>
                                    <p className="text-gray-300 text-sm">
                                        {project.description}
                                    </p>
                                    <div>
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} className="inline-block bg-gradient-to-r from-cyan-500/40 to-blue-500/40 text-white text-xs px-3 py-1 rounded-full mr-2 mt-4 border border-cyan-400/50 hover:border-cyan-300 transition-colors">
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