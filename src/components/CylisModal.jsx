import './CylisModal.css';

export const CylisModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const project = {
    title: 'Cylis',
    subtitle: 'Site vitrine pour le groupe SmileRepair',
    summary:
      'Cylis a été réalisé comme une vitrine digitale simple, moderne et efficace pour présenter les services du groupe SmileRepair. Le travail portait sur la clarté du message, la cohérence du design et la qualité de la présentation en ligne.',
    highlights: [
      'Création d’un design sobre, professionnel et adapté à la communication commerciale',
      'Structuration du contenu pour améliorer la lisibilité et la compréhension du visiteur',
      'Mise en ligne d’un site prêt à être présenté à un client ou à une structure partenaire'
    ],
    stack: [{name: 'WordPress', icon: 'devicon-wordpress-plain'},
       {name: 'Design web', icon: 'devicon-illustrator-plain'},
        {name: 'SEO de base', icon: 'devicon-seo-plain'}],
    link: 'https://cylis.net'
  };

  return (
    <>
      <div className="cylis-modal-backdrop" onClick={onClose} />

      <div className="cylis-modal">
        <div className="cylis-modal-border">
          <div className="cylis-gradient-1"></div>
          <div className="cylis-gradient-2"></div>
          <div className="cylis-gradient-3"></div>
        </div>

        <div className="cylis-modal-content">
          <button className="cylis-close-button" onClick={onClose} aria-label="Fermer">
            ✕
          </button>

          <div className="cylis-readme-body">
            <div className="markdown-content">
              <h1>{project.title}</h1>
              <p>
                <strong>{project.subtitle}</strong>
              </p>
              <p>{project.summary}</p>

              <h2>Ce qui ressort du projet</h2>
              <ul>
                {project.highlights.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>

              <h2>Stack</h2>
              <div className="cylis-stack-list" aria-label="Technologies utilisées">
                {project.stack.map((item) => (
                  <span key={item.name} className="cylis-stack-item" title={item.name} aria-label={item.name}>
                    <span className="cylis-stack-bullet" aria-hidden="true" />
                    <span className="cylis-stack-name">{item.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="cylis-modal-footer">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-button">
              Visiter le site →
            </a>
            <button className="close-footer-button" onClick={onClose}>
              Fermer
            </button>
          </div>
        </div>

        <div className="cylis-particles">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="cylis-particle" style={{ '--delay': `${i * 0.1}s` }} />
          ))}
        </div>
      </div>
    </>
  );
};
