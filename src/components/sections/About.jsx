import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-16 relative">
            {/* Holographic background elements */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            
            <RevealOnScroll>
            <div className="max-w-6xl relative z-10 w-full">
                <h2 className="text-4xl md:text-5xl font-bold michroma text-cyan-400 mb-4 text-center">A propos de moi</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-blue-400 to-transparent mx-auto mb-12"></div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Professional Card */}
                    <div className="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-cyan-400/30 rounded-lg p-8 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 group">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">💻</div>
                            <h3 className="text-2xl font-bold text-cyan-300">Développeur</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Je suis un développeur passionné avec une expérience dans la création d'applications web modernes. 
                            J'aime relever des défis techniques et apprendre de nouvelles technologies. 
                            Mon objectif est de répondre aux besoins des cahiers des charges avec du code propre et maintenable.
                        </p>
                    </div>
                    
                    {/* Passion Card */}
                    <div className="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-purple-400/30 rounded-lg p-8 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20 group">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🎮</div>
                            <h3 className="text-2xl font-bold text-purple-300">Passions</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Au-delà du développement, j'aime explorer les tendances technologiques et contribuer à des projets open source. 
                            Je suis fan de jeux vidéo, notamment les jeux de combat (Street Fighter, Tekken), et passionné par le sport comme le basket et la musculation.
                        </p>
                    </div>
                </div>
                
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-cyan-400/30 rounded-lg p-8 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                    <h3 className="text-2xl font-bold text-cyan-300 mb-4">Mon Approche</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        Je suis quelqu'un de très curieux qui cherche constamment à apprendre et à découvrir de nouvelles choses. 
                        J'explore les dernières tendances technologiques et je partage mes connaissances avec la communauté.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        Je suis toujours à la recherche de nouvelles opportunités pour collaborer sur des projets passionnants 
                        et continuer à grandir en tant que développeur. L'innovation et l'excellence sont au cœur de tout ce que je fais.
                    </p>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}