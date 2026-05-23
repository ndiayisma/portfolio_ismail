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
        <section id="skills" className="scroll-offset py-16 md:py-20" data-aos="fade-up">
            <RevealOnScroll>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-stale-500 mb-12 py-8 text-center">
                    Mes Compétences
                </h1>
                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-slate-900 border border-gray-700 p-6 rounded-lg hover:border-green-500 transition-colors flex items-center gap-4">
                            <i className={`${skill.icon} colored text-5xl`}></i>
                            <h3 className="font-bold text-lg text-white">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};