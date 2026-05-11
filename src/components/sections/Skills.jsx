export const Skills = () => {
    const skills = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Node.js", level: 70 },
        { name: "Python", level: 65 },
    ];

    return (
        <section id="skills" className="scroll-offset py-16 md:py-20" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-stale-500 mb-12 py-8 text-center">
                    Mes Compétences
                </h1>
                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-red-500 transition-colors">
                            <h3 className="font-bold text-lg text-white mb-4">{skill.name}</h3>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};