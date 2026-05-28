import { useEffect, useState } from 'react';
import './CylisModal.css';

export const CylisModal = ({ isOpen, onClose }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      // Fetch le README depuis le dossier public
      fetch('/Cylis/README.md')
        .then(res => res.text())
        .then(text => {
          setContent(text);
          setLoading(false);
        })
        .catch(err => {
          console.error('Erreur lors du chargement du README:', err);
          setLoading(false);
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="cylis-modal-backdrop" onClick={onClose} />
      
      {/* Modal */}
      <div className="cylis-modal">
        {/* Holographic border */}
        <div className="cylis-modal-border">
          <div className="cylis-gradient-1"></div>
          <div className="cylis-gradient-2"></div>
          <div className="cylis-gradient-3"></div>
        </div>

        {/* Content */}
        <div className="cylis-modal-content">
          <button 
            className="cylis-close-button"
            onClick={onClose}
            aria-label="Fermer"
          >
            ✕
          </button>

          <div className="cylis-readme-body">
            {loading ? (
              <div className="loading-spinner">
                <div className="spinner"></div>
                <p>Chargement du README...</p>
              </div>
            ) : (
              <div className="markdown-content">
                {content.split('\n').map((line, idx) => {
                  // Image markdown
                  if (line.startsWith('![')) {
                    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/;
                    const match = line.match(imageRegex);
                    if (match) {
                      return (
                        <div key={idx} className="md-image-container">
                          <img 
                            src={match[2]} 
                            alt={match[1]}
                            className="md-image"
                          />
                        </div>
                      );
                    }
                  }
                  // Titre H1
                  if (line.startsWith('# ')) {
                    return <h1 key={idx} className="md-h1">{line.substring(2)}</h1>;
                  }
                  // Titre H2
                  if (line.startsWith('## ')) {
                    return <h2 key={idx} className="md-h2">{line.substring(3)}</h2>;
                  }
                  // Titre H3
                  if (line.startsWith('### ')) {
                    return <h3 key={idx} className="md-h3">{line.substring(4)}</h3>;
                  }
                  // Code block
                  if (line.startsWith('```')) {
                    return null;
                  }
                  // Lien
                  if (line.includes('[') && line.includes('](')) {
                    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                    const parts = line.split(linkRegex);
                    return (
                      <p key={idx} className="md-p">
                        {parts.map((part, i) => {
                          if (i % 3 === 1) return <strong key={i}>{part}</strong>;
                          if (i % 3 === 2) return <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="md-link">{part}</a>;
                          return part;
                        })}
                      </p>
                    );
                  }
                  // Liste
                  if (line.startsWith('- ')) {
                    return <li key={idx} className="md-li">{line.substring(2)}</li>;
                  }
                  // Ligne vide
                  if (line.trim() === '') {
                    return <div key={idx} className="md-spacer" />;
                  }
                  // Texte normal
                  return <p key={idx} className="md-p">{line}</p>;
                })}
              </div>
            )}
          </div>

          <div className="cylis-modal-footer">
            <a 
              href="https://cylis.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-button"
            >
              Visiter le site →
            </a>
            <button 
              className="close-footer-button"
              onClick={onClose}
            >
              Fermer
            </button>
          </div>
        </div>

        {/* Animated particles */}
        <div className="cylis-particles">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="cylis-particle" 
              style={{
                '--delay': `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};
