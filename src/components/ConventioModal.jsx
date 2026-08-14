import './ConventioModal.css';

export const ConventioModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const project = {
    title: 'Projet Conventio',
    subtitle: 'Application web de gestion des conventions de stage',
    summary:
      'Conventio est une application web développée pour centraliser la gestion des conventions de stage entre les étudiants, les enseignants et les entreprises. L’objectif était de simplifier les démarches administratives tout en offrant une expérience claire et rapide.',
    highlights: [
      'Travail avec la méthode Agile pour une organisation efficace et livrer des sprints réguliers',
      'Mise en place d’un parcours de validation fluide pour les conventions',
      'Interface pensée pour faciliter la saisie et le suivi des dossiers',
      'Travail en équipe autour d’une architecture web maintenable et évolutive',
    ],
    stack: [
      { name: 'Symfony', icon: 'devicon-symfony-original' },
      { name: 'PHP', icon: 'devicon-php-plain' },
      { name: 'MySQL', icon: 'devicon-mysql-plain' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'GitHub', icon: 'devicon-github-plain' }
    ],
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

              <h2>Organisation</h2>
              <ul>
                {project.highlights.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>

              <h2>Stack</h2>
              <div className="conventio-stack-list" aria-label="Technologies utilisées">
                {project.stack.map((item) => (
                  <span key={item.name} className="conventio-stack-item" title={item.name} aria-label={item.name}>
                    <i className={`${item.icon} colored`} aria-hidden="true" />
                    <span className="conventio-stack-name">{item.name}</span>
                  </span>
                ))}
              </div>
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
