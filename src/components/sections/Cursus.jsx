import { RevealOnScroll } from "../RevealOnScroll";

export const Cursus = () => {
    const formations = [
        {
            titre: "BTS SIO - Option SLAM",
            periode: "2023-2026",
            lieu: "Lycée Gabriel Fauré - Annecy"
        },
        {
            titre: "DUT Informatique",
            periode: "2022-2023",
            lieu: "IUT Annecy - USMB"
        },
        {
            titre: "Baccalauréat Technologique STI2D",
            periode: "2018-2022",
            lieu: "Lycée Charles Poncet - Cluses"
        }
    ];

    const experiences = [
        {
            titre: "SmileRepair",
            periode: "24 Juin 2023 - 27 Juin 2024 / 13 janvier - 28 février 2025",
            description: "Durant mes deux années de BTS, j'ai eu le privilège d'effectuer un stage professionnel " +
                "dans le domaine du développement web en utilisant le CMS WordPress. Cette expérience m'a permis de mettre en pratique mes compétences en développement tout en découvrant les spécificités de la création de sites web avec WordPress. " +
                "J'ai travaillé sur divers projets, contribuant à la conception, au développement et à la maintenance de sites web pour des clients variés. " +
                "Cette immersion dans le monde professionnel m'a permis de renforcer mes compétences techniques, d'améliorer ma capacité à travailler en équipe et de mieux comprendre les besoins des clients dans le domaine du développement web."
        },
        {
            titre: "Burger King (Annecy Bonlieu)",
            periode: "6 septembre 2023 - Aujourd'hui",
            description: "Equipier Polyvalent"
        },
        {
            titre: "Agence Intérim Promane",
            periode: "Juillet 2023",
            description: "Travail en Intérim/Vougy, Haute-Savoie"
        },
        {
            titre: "Waouh! (Cluses)",
            periode: "Décembre 2020",
            description: "Ce mini stage d'une journée était dans le cadre d'un " +
                "accompagnement spécialisé pour les élèves en situatuion de handicap. " +
                "J'ai eu l'opportunité de découvrir le monde du travail et d'explorer différentes professions, " +
                "ce qui m'a permis de mieux comprendre mes intérêts et mes aspirations professionnelles."
        }
    ];

    return (
        <section id="cursus" className="scroll-offset py-16 md:py-20" data-aos="fade-up">
            <RevealOnScroll>
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-12 py-8 text-center">
                        Mon Parcours
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Colonne Formation */}
                        <div>
                            <h2 className="text-2xl font-bold text-blue-500 mb-6">Formation</h2>
                            <div className="flex flex-col gap-4">
                                {formations.map((formation, index) => (
                                    <div key={index} className="bg-slate-900 border border-gray-700 p-6 rounded-lg hover:border-white-500 transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-lg text-white">{formation.titre}</h3>
                                            <span className="text-sm text-gray-400 whitespace-nowrap ml-4">{formation.periode}</span>
                                        </div>
                                        <p className="text-gray-300">{formation.lieu}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Colonne Expérience Professionnelle */}
                        <div>
                            <h2 className="text-2xl font-bold text-blue-700 mb-6">Expérience Professionnelle</h2>
                            <div className="flex flex-col gap-4">
                                {experiences.map((experience, index) => (
                                    <div key={index} className="bg-slate-900 border border-gray-700 p-6 rounded-lg hover:border-stale-100 transition-colors">
                                        <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                                            <h3 className="font-bold text-lg text-white">{experience.titre}</h3>
                                            <span className="text-sm text-gray-400">{experience.periode}</span>
                                        </div>
                                        <p className="text-gray-300">{experience.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bouton CV */}
                    <div className="py-12 text-center">
                        <a
                            href="PDF/CV_Ismail.pdf"
                            className="btn inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors btn::before:bg-white"
                        >
                            Télécharger mon CV
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}