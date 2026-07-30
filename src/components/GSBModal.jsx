import './GSBModal.css';

export const GSBModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const project = {
    title: 'GSB-Express',
    subtitle: 'Application mobile et API REST pour la gestion des visites',
    summary:
      'GSB-Express a été conçu pour accompagner les visiteurs du groupe pharmaceutique dans la gestion de leurs visites et de leurs praticiens. Le projet allie une application Android à une API sécurisée pour offrir une expérience moderne et fiable.',
    highlights: [
      'Implémentation d’une authentification JWT avec un niveau de sécurité adapté au contexte métier',
      'Architecture MVVM pour séparer clairement logique métier et interface utilisateur',
      'Gestion des données avec une API REST robuste et une logique de synchronisation locale efficace'
    ],
    stack: ['Express.js', 'MongoDB', 'Java', 'Retrofit', 'Android Studio'],
    link: 'https://github.com/ndiayisma/api-rest-gsb'
  };

  return (
    <>
      <div className="gsb-modal-backdrop" onClick={onClose} />

      <div className="gsb-modal">
        <div className="gsb-modal-border">
          <div className="gsb-gradient-1"></div>
          <div className="gsb-gradient-2"></div>
          <div className="gsb-gradient-3"></div>
        </div>

        <div className="gsb-modal-content">
          <button className="gsb-close-button" onClick={onClose} aria-label="Fermer">
            ✕
          </button>

          <div className="gsb-readme-body">
            <div className="markdown-content">
              <h1>{project.title}</h1>
              <p>
                <strong>{project.subtitle}</strong>
              </p>
              <p>{project.summary}</p>

              <h2>Points forts</h2>
              <ul>
                {project.highlights.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>

              <h2>Stack</h2>
              <p>{project.stack.join(' • ')}</p>
            </div>
          </div>

          <div className="gsb-modal-footer">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-button">
              Voir sur GitHub →
            </a>
            <button className="close-footer-button" onClick={onClose}>
              Fermer
            </button>
          </div>
        </div>

        <div className="gsb-particles">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="gsb-particle" style={{ '--delay': `${i * 0.1}s` }} />
          ))}
        </div>
      </div>
    </>
  );
};
