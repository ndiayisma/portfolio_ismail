import './GSBModal.css';

export const GSBModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const project = {
    title: 'GSB-Express',
    subtitle: 'Application mobile et API REST pour la gestion des visites',
    summary:
      "GSB (Galaxy Swiss Bourdin) est une entreprise pharmaceutique issue d'une fusion entre Galaxy et le conglomérat hélvetique Swiss Bourdin.\n" +
      'GSB-Express a été conçu pour accompagner les visiteurs du groupe pharmaceutique ' +
      'dans la gestion de leurs visites et de leurs praticiens. ' +
      'Le projet allie une application Android (Java) à une API sécurisée (Postman) pour offrir une expérience moderne et fiable.',
    highlights: [
      'Implémentation d’une authentification JWT avec un niveau de sécurité adapté au contexte métier',
      'Architecture MVVM pour séparer clairement logique métier et interface utilisateur',
      'Gestion des données tels que les portefeuilles, praticiens et visiteurs avec une API REST',
      'Communication sécurisée entre l’application mobile et l’API via Retrofit',
      'Utilisation de MongoDB pour le stockage des données et ExpressJS pour la gestion des routes'
    ],
    stack: [
      { name: 'Express.js', icon: 'devicon-express-original' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
      { name: 'Java', icon: 'devicon-java-plain' },
      { name: 'Retrofit', icon: 'devicon-androidstudio-plain' },
      { name: 'Android Studio', icon: 'devicon-androidstudio-plain' }
    ],
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
            <div className="markdown-content py-4 px-2">
              <h1>{project.title}</h1>
              <p>
                <strong>{project.subtitle}</strong>
              </p>
              <p className="gsb-summary">{project.summary}</p>

              <h2>Objectif</h2>
              <ul>
                {project.highlights.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>

              <h2>Stack</h2>
              <div className="gsb-stack-list" aria-label="Technologies utilisées">
                {project.stack.map((item) => (
                  <span key={item.name} className="gsb-stack-item" title={item.name} aria-label={item.name}>
                    <i className={`${item.icon} colored`} aria-hidden="true" />
                    <span className="gsb-stack-name">{item.name}</span>
                  </span>
                ))}
              </div>
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
