import './ProjetPersonnelModal.css';

export const ProjetPersonnelModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const project = {
        title: 'Projet Personnel',
        subtitle: 'Guide web autour de la communauté FGC',
        summary:
            'Ce projet personnel a été créé pour rendre l’univers des jeux de combat plus accessible, notamment autour de la communauté FGC. L’idée était de proposer un espace clair, simple et agréable à parcourir, avec un contenu pensé pour l’apprentissage et la découverte.',
        highlights: [
            'Organisation du contenu pour une lecture intuitive et fluide',
            'Création d’une interface simple, lisible et adaptée à la découverte',
            'Base solide pour évoluer vers une véritable ressource communautaire plus complète'
        ],
        stack: [{name: 'Next.js', icon: 'devicon-nextjs-plain'}, 
            {name: 'TailwindCSS', icon: 'devicon-tailwindcss-plain'}, 
        ],
        link: 'https://github.com/ndiayisma/ism-fgc-glossary'
    };

    return (
        <div className="projet-personnel-modal-overlay" onClick={onClose}>
            <div className="projet-personnel-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="projet-personnel-modal-close" onClick={onClose}>
                    ✕
                </button>

                <div className="projet-personnel-modal-header">
                    <div className="projet-personnel-gradient-blob"></div>
                </div>

                <div className="projet-personnel-modal-body">
                    <div className="markdown-content">
                        <h1>{project.title}</h1>
                        <p>
                            <strong>{project.subtitle}</strong>
                        </p>
                        <p>{project.summary}</p>

                        <h2>Ce que le projet propose</h2>
                        <ul>
                            {project.highlights.map((item, index) => (
                                <li key={index}>• {item}</li>
                            ))}
                        </ul>

                        <h2>Stack</h2>
                            <div className="projet-personnel-stack-list" aria-label="Technologies utilisées">
                                {project.stack.map((item) => (
                                    <span key={item.name} className="projet-personnel-stack-item" title={item.name} aria-label={item.name}>
                                        <span className="projet-personnel-stack-bullet" aria-hidden="true" />
                                        <i className={`${item.icon} colored`} aria-hidden="true" />
                                        <span className="projet-personnel-stack-name">{item.name}</span>
                                    </span>
                                ))}
                            </div>
                    </div>
                </div>

                <div className="projet-personnel-particle"></div>
                <div className="projet-personnel-particle" style={{ animationDelay: '0.2s' }}></div>
                <div className="projet-personnel-particle" style={{ animationDelay: '0.4s' }}></div>
            </div>
        </div>
    );
};
