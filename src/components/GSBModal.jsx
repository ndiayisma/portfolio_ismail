import { useState } from 'react';
import './GSBModal.css';

export const GSBModal = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      { name: 'Android Studio', icon: 'devicon-androidstudio-plain' },
      { name: 'Postman', icon: 'devicon-postman-plain' }
    ],
    demos: [
      { src: '/GSB/pageConnexion.png', alt: 'Écran de connexion GSB-Express' },
      { src: '/GSB/listePraticiens.png', alt: 'Écran d’accueil GSB-Express' }
    ],
    link: 'https://github.com/ndiayisma/api-rest-gsb'
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? project.demos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === project.demos.length - 1 ? 0 : prev + 1));
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

              <h2>Demos</h2>
              <div className="relative w-full">
                <div className="relative h-56 overflow-hidden rounded-lg border border-white/10 bg-black/20 md:h-96">
                  {project.demos.map((demo, index) => (
                    <div
                      key={demo.src}
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={demo.src}
                        className="block max-h-full max-w-full object-contain"
                        alt={demo.alt}
                      />
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={previousSlide}
                    className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-xl text-white transition hover:bg-black/55"
                    aria-label="Image précédente"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-xl text-white transition hover:bg-black/55"
                    aria-label="Image suivante"
                  >
                    ›
                  </button>
                </div>

                <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-3">
                  {project.demos.map((demo, index) => (
                    <button
                      key={demo.src}
                      type="button"
                      className={`gsb-carousel-dot ${index === currentSlide ? 'is-active' : ''}`}
                      aria-current={index === currentSlide}
                      aria-label={`Slide ${index + 1}`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
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
