import './ConventioModal.css';

export const ConventioModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const project = {
    title: 'Projet Conventio',
    subtitle: 'Application web de gestion des conventions de stage',
    summary:
      'Conventio est une application web développée pour centraliser la gestion des conventions de stage entre les étudiants, les enseignants et les entreprises. L’objectif était de simplifier les démarches administratives tout en offrant une expérience claire et rapide.',
    highlights: [
      'Mise en place d’un parcours de validation fluide pour les conventions',
      'Interface pensée pour faciliter la saisie et le suivi des dossiers',
      'Travail en équipe autour d’une architecture web maintenable et évolutive'
    ],
    stack: ['Symfony', 'PHP', 'MySQL', 'Docker', 'GitHub'],
    link: 'https://github.com/maxervj/Conventio'
  };

  return (
    <>
      <div className="conventio-modal-backdrop" onClick={onClose} />

      <div className="conventio-modal">
        <div className="conventio-modal-border">
          <div className="conventio-gradient-1"></div>
          <div className="conventio-gradient-2"></div>
          <div className="conventio-gradient-3"></div>
        </div>

        <div className="conventio-modal-content">
          <button className="conventio-close-button" onClick={onClose} aria-label="Fermer">
            ✕
          </button>

          <div className="conventio-readme-body">
            <div className="markdown-content">
              <h1>{project.title}</h1>
              <p>
                <strong>{project.subtitle}</strong>
              </p>
              <p>{project.summary}</p>

              <h2>Ce que j’ai mis en place</h2>
              <ul>
                {project.highlights.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>

              <h2>Stack</h2>
              <p>{project.stack.join(' • ')}</p>
            </div>
          </div>

          <div className="conventio-modal-footer">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-button">
              Voir sur GitHub →
            </a>
            <button className="close-footer-button" onClick={onClose}>
              Fermer
            </button>
          </div>
        </div>

        <div className="conventio-particles">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="conventio-particle" style={{ '--delay': `${i * 0.1}s` }} />
          ))}
        </div>
      </div>
    </>
  );
};
