import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectModal } from "../ProjectModal";

const projects = [
    {
        title: "Projet Conventio",
        description: "Une application web réalisé en groupe pour la gestion de conventions de stage pour les étudiants de BTS. "
        + "Elle permet de créer, gérer et suivre les conventions de stage, facilitant ainsi le processus administratif pour les étudiants et les entreprises.",
        technologies: ["Symfony", "PHP", "MySQL", "Docker", "GitHub", "PhPStorm"],
        image: "/ExempleConventio.png",
        link: "https://github.com/maxervj/Conventio",
        modal: {
            title: "Projet Conventio",
            subtitle: "Application web de gestion des conventions de stage",
            summary: "Conventio est une application web développée pour centraliser la gestion des conventions de stage entre les étudiants, les enseignants et les entreprises. L’objectif était de simplifier les démarches administratives tout en offrant une expérience claire et rapide.",
            highlightsTitle: "Ce que j’ai mis en place",
            highlights: [
                "Mise en place d’un parcours de validation fluide pour les conventions",
                "Interface pensée pour faciliter la saisie et le suivi des dossiers",
                "Travail en équipe autour d’une architecture web maintenable et évolutive"
            ],
            stack: ["Symfony", "PHP", "MySQL", "Docker", "GitHub"],
            stackAsPills: false,
            linkLabel: "Voir sur GitHub →",
            themeClass: "project-modal-conventio",
            theme: {
                accent: "#3498db",
                accentStrong: "#ff6b9d",
                accentSoft: "rgba(255, 107, 157, 0.25)",
                accentRgb: "52, 152, 219",
                accent2: "#ff6b9d",
                modalBgStart: "rgba(5, 8, 20, 0.98)",
                modalBgEnd: "rgba(18, 24, 42, 0.95)",
                borderStart: "#ff6b9d",
                borderEnd: "#3498db"
            }
        }
    },
    {
        title: "GSB-Express",
        description: "Une Application Mobile avec Architecture MVVM, développée avec Java pour gérer les authentifications sécurisées des visiteurs via les tokens,"
        + " ainsi aux accès à leur portefeuille de praticiens. Faite aussi en parallèle avec une communication API REST et ExpressJS pour les gestion de données.",
        technologies: ["ExpressJS", "Postman API", "GitHub", "MongoDB", "Java", "Retrofit", "Android Studio"],
        image: "/GSB.png",
        link: "https://github.com/ndiayisma/api-rest-gsb",
        modal: {
            title: 'GSB-Express',
            subtitle: 'Application mobile et API REST pour la gestion des visites',
            summary:
                "GSB (Galaxy Swiss Bourdin) est une entreprise pharmaceutique issue d'une fusion entre Galaxy et le conglomérat hélvetique Swiss Bourdin.\n" +
                'GSB-Express a été conçu pour accompagner les visiteurs du groupe pharmaceutique ' +
                'dans la gestion de leurs visites et de leurs praticiens. ' +
                'Le projet allie une application Android (Java) à une API sécurisée (Postman) pour offrir une expérience moderne et fiable.',
            highlightsTitle: 'Objectif',
            highlights: [
                'Implémentation d’une authentification JWT avec un niveau de sécurité adapté au contexte métier',
                'Architecture MVVM pour séparer clairement logique métier et interface utilisateur',
                'Gestion des données tels que les portefeuilles, praticiens et visiteurs avec une API REST',
                'Communication sécurisée entre l’application mobile et l’API via Retrofit',
                'Utilisation de MongoDB pour le stockage des données et ExpressJS pour la gestion des routes'
            ],
            stack: [
                { name: 'Express.js', icon: 'devicon-express-original' },
                { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
                { name: 'Java', icon: 'devicon-java-plain' },
                { name: 'Retrofit', icon: 'devicon-androidstudio-plain' },
                { name: 'Android Studio', icon: 'devicon-androidstudio-plain' }
            ],
            stackAsPills: true,
            summaryClassName: 'gsb-summary',
            linkLabel: 'Voir sur GitHub →',
            themeClass: 'project-modal-gsb',
            theme: {
                accent: '#00ffff',
                accentStrong: '#00ff88',
                accentSoft: 'rgba(0, 255, 255, 0.25)',
                accentRgb: '0, 255, 255',
                accent2: '#00ff88',
                modalBgStart: 'rgba(5, 8, 20, 0.98)',
                modalBgEnd: 'rgba(13, 26, 32, 0.95)',
                borderStart: '#00d5ed',
                borderEnd: '#00ff88'
            }
        }
    },
    {
        title: "Cylis",
        description: "Un site vitrine réalisé avec le Groupe SmileRepair pour la promotion de leurs services basé en Algérie."
         + " Conçu dans le cadre du stage de deuxième année.",
        technologies: ["WordPress"],
        image: "/ExempleCylis.png",
        link: "https://cylis.net",
        modal: {
            title: 'Cylis',
            subtitle: 'Site vitrine pour le groupe SmileRepair',
            summary: 'Cylis a été réalisé comme une vitrine digitale simple, moderne et efficace pour présenter les services du groupe SmileRepair. Le travail portait sur la clarté du message, la cohérence du design et la qualité de la présentation en ligne.',
            highlightsTitle: 'Ce qui ressort du projet',
            highlights: [
                'Création d’un design sobre, professionnel et adapté à la communication commerciale',
                'Structuration du contenu pour améliorer la lisibilité et la compréhension du visiteur',
                'Mise en ligne d’un site prêt à être présenté à un client ou à une structure partenaire'
            ],
            stack: ['WordPress', 'Design web', 'SEO de base'],
            stackAsPills: false,
            linkLabel: 'Visiter le site →',
            themeClass: 'project-modal-cylis',
            theme: {
                accent: '#667eea',
                accentStrong: '#ff9a56',
                accentSoft: 'rgba(255, 154, 86, 0.22)',
                accentRgb: '102, 126, 234',
                accent2: '#ff9a56',
                modalBgStart: 'rgba(7, 10, 24, 0.98)',
                modalBgEnd: 'rgba(15, 23, 42, 0.95)',
                borderStart: '#ff9a56',
                borderEnd: '#667eea'
            }
        }
    },
    {
        title: "Projet Personnel",
        description: "Un projet personnel de développement web servant de guide et glossaires pour les débutants dans la communauté FGC (Tekken, Street Fighter )(Fighting Game Community).",
        technologies: ["Next.JS", "TailwindCSS"],
        image: "/TeaserProjetPerso.jpeg",
        link: "https://github.com/ndiayisma/ism-fgc-glossary",
        modal: {
            title: 'Projet Personnel',
            subtitle: 'Guide web autour de la communauté FGC',
            summary: 'Ce projet personnel a été créé pour rendre l’univers des jeux de combat plus accessible, notamment autour de la communauté FGC. L’idée était de proposer un espace clair, simple et agréable à parcourir, avec un contenu pensé pour l’apprentissage et la découverte.',
            highlightsTitle: 'Ce que le projet propose',
            highlights: [
                'Organisation du contenu pour une lecture intuitive et fluide',
                'Création d’une interface simple, lisible et adaptée à la découverte',
                'Base solide pour évoluer vers une véritable ressource communautaire plus complète'
            ],
            stack: ['Next.js', 'TailwindCSS', 'Design web'],
            stackAsPills: false,
            linkLabel: 'Voir sur GitHub →',
            themeClass: 'project-modal-personnel',
            theme: {
                accent: '#ff6b35',
                accentStrong: '#f7931e',
                accentSoft: 'rgba(255, 107, 53, 0.22)',
                accentRgb: '255, 107, 53',
                accent2: '#f7931e',
                modalBgStart: 'rgba(20, 20, 30, 0.95)',
                modalBgEnd: 'rgba(30, 15, 40, 0.95)',
                borderStart: '#ff6b35',
                borderEnd: '#f7931e'
            }
        }
    }
];

export const Projects = () => {
    const [activeProjectModal, setActiveProjectModal] = useState(null);

    const openModal = (project) => (event) => {
        event.preventDefault();
        setActiveProjectModal(project.modal);
    };

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
                    {projects.map((project, index) => {
                        return (
                            <a
                                key={index}
                                href={project.modal ? '#' : project.link}
                                target={project.modal ? undefined : '_blank'}
                                rel={project.modal ? undefined : 'noopener noreferrer'}
                                onClick={project.modal ? openModal(project) : undefined}
                                className="block group"
                            >
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
                        );
                    })}
                </div>
            </div>
            </RevealOnScroll>

            <ProjectModal
                isOpen={Boolean(activeProjectModal)}
                onClose={() => setActiveProjectModal(null)}
                project={activeProjectModal}
            />
        </section>
    );
}