import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-16">
            <RevealOnScroll>
            <div className="max-w-4xl text-center">
                <h2 className="text-4xl font-bold text-cyan-400 mb-8">A propos de moi</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Je suis un développeur passionné avec une expérience dans la création d'applications web modernes. 
                    J'aime relever des défis techniques et apprendre de nouvelles technologies pour améliorer mes compétences. 
                    Mon objectif est de créer des expériences utilisateur exceptionnelles tout en écrivant du code propre et maintenable.
                    <br /><br />
                    J'aime explorer les dernières tendances technologiques, 
                    contribuer à des projets open source et partager mes connaissances avec la communauté. 
                    En dehors du développement, je suis une homme très curieux, qui cherche à apprendre et découvrir de nouvelles choses.<br/>
                    Sinon, à mes heures perdues, j'aime faire du sport, que ce soit la musculation ou le street basket,
                    et je suis également un grand fan de jeux vidéo, en particulier les jeux de combat (Street Fighter, Tekken etc...), 
                    un domaine qui regroupe une grande communauté dans le monde et des locaux de compétitions, avec des titres
                    <br/>
                    Je suis toujours à la recherche de nouvelles opportunités pour collaborer sur des projets passionnants 
                    et continuer à grandir en tant que développeur.
                </p>
            </div>
            </RevealOnScroll>
        </section>
    );
}