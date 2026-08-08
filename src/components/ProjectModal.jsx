import './ProjectModal.css';

export const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  const accentStyle = {
    '--accent': project.theme.accent,
    '--accent-strong': project.theme.accentStrong,
    '--accent-soft': project.theme.accentSoft,
    '--accent-rgb': project.theme.accentRgb,
    '--accent-2': project.theme.accent2,
    '--modal-bg-start': project.theme.modalBgStart,
    '--modal-bg-end': project.theme.modalBgEnd,
    '--border-start': project.theme.borderStart,
    '--border-end': project.theme.borderEnd
  };

  return (
    <>
      <div className="project-modal-backdrop" onClick={onClose} />

      <div className={`project-modal ${project.themeClass}`}>
        <div className="project-modal-border" style={accentStyle}>
          <div className="project-modal-gradient project-modal-gradient-1" />
          <div className="project-modal-gradient project-modal-gradient-2" />
          <div className="project-modal-gradient project-modal-gradient-3" />
        </div>

        <div className="project-modal-content" style={accentStyle} onClick={(event) => event.stopPropagation()}>
          <button className="project-modal-close" onClick={onClose} aria-label="Fermer">
            ✕
          </button>

          <div className="project-modal-body">
            <div className={`markdown-content ${project.summaryClassName ?? ''}`.trim()}>
              <h1>{project.title}</h1>
              <p>
                <strong>{project.subtitle}</strong>
              </p>
              <p>{project.summary}</p>

              <h2>{project.highlightsTitle}</h2>
              <ul>
                {project.highlights.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>

              <h2>Stack</h2>
              {project.stackAsPills ? (
                <div className="project-modal-stack-list" aria-label="Technologies utilisées">
                  {project.stack.map((item) => (
                    <span key={item.name ?? item} className="project-modal-stack-item" title={item.name ?? item} aria-label={item.name ?? item}>
                      {item.icon ? <i className={`${item.icon} colored`} aria-hidden="true" /> : null}
                      <span className="project-modal-stack-name">{item.name ?? item}</span>
                    </span>
                  ))}
                </div>
              ) : (
                <p>{project.stack.join(' • ')}</p>
              )}
            </div>
          </div>

          <div className="project-modal-footer">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-modal-primary-button">
              {project.linkLabel}
            </a>
            <button className="project-modal-secondary-button" onClick={onClose}>
              Fermer
            </button>
          </div>
        </div>

        <div className="project-modal-particles">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="project-modal-particle" style={{ '--delay': `${index * 0.1}s` }} />
          ))}
        </div>
      </div>
    </>
  );
};