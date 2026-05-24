import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
    const skills = [
        { name: "HTML", icon: "devicon-html5-plain" },
        { name: "CSS", icon: "devicon-css3-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "React", icon: "devicon-react-original" },
        { name: "Node.js", icon: "devicon-nodejs-plain" },
        { name: "Python", icon: "devicon-python-plain" },
        { name: "PHP", icon: "devicon-php-plain" },
        { name: "SQL", icon: "devicon-database-plain" },
        { name: "Git", icon: "devicon-git-plain" },
        { name: "Docker", icon: "devicon-docker-plain" },
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
    ];

    return (
        <section id="skills" className="scroll-offset py-16 md:py-20 relative" data-aos="fade-up">
            {/* Holographic background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
            
            <RevealOnScroll>
            <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold michroma text-cyan-400 mb-4 py-8 text-center">
                    Mes Compétences
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-blue-400 to-transparent mx-auto mb-12"></div>
                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-cyan-400/30 p-6 rounded-lg hover:border-cyan-400 transition-all duration-300 flex items-center gap-4 group cursor-pointer hover:shadow-lg hover:shadow-cyan-400/20">
                            <div className="relative">
                                <i className={`${skill.icon} colored text-5xl transition-transform group-hover:scale-110`}></i>
                            </div>
                            <h3 className="font-bold text-lg text-cyan-300 group-hover:text-cyan-200 transition-colors">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};