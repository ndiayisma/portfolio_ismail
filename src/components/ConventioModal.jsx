import { useState } from 'react';
import './ConventioModal.css';

export const ConventioModal = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      { name: 'PhPStorm', icon: 'devicon-phpstorm-plain' },
      { name: 'Symfony 7.4', icon: 'devicon-symfony-original' },
      { name: 'PHP 8.1+', icon: 'devicon-php-plain' },
      { name: 'MySQL', icon: 'devicon-mysql-plain' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'GitHub', icon: 'devicon-github-plain' },
      { name: 'Doctrine ORM', icon: 'devicon-doctrine-plain' },
      { name: 'Gotenberg', icon: 'devicon-gutenberg-plain' },
    ],
    howItWorks: [
      'Les étudiants soumettent leurs conventions de stage via l’application',
      'Les enseignants et les entreprises reçoivent des notifications pour valider les conventions',
    ],
    fonctionalities: [
      'Gestion des utilisateurs (étudiants, enseignants, entreprises)',
      'Création et suivi des conventions de stage',
      'Validation des conventions par les enseignants et les entreprises',
      'Génération automatique des documents PDF pour les conventions',
      'Notifications par email pour les différentes étapes du processus',
    ],
    demos: [
      { src: '/ExempleConventio.png', alt: 'Vue globale de Conventio' },
      { src: '/Conventio/connectConventio.png', alt: 'Écran de connexion Conventio' },
      { src: '/Conventio/menuDemande.png', alt: 'Menu des demandes des collectes d\'informations' },
      { src: '/Conventio/formulaireDemande.png', alt: 'Formulaire de demande de convention' },
    ],
    link: 'https://github.com/maxervj/Conventio'
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? project.demos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === project.demos.length - 1 ? 0 : prev + 1));
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

              <h2>Technologies Utilisées</h2>
              <div className="conventio-stack-list" aria-label="Technologies utilisées">
                {project.stack.map((item) => (
                  <span key={item.name} className="conventio-stack-item" title={item.name} aria-label={item.name}>
                    <i className={`${item.icon} colored`} aria-hidden="true" />
                    <span className="conventio-stack-name">{item.name}</span>
                  </span>
                ))}
              </div>

              <h2>Fonctionnalités</h2>
              <ul>
                {project.fonctionalities.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>

              <h2>Demos</h2>
              <div className="relative w-full">
                <div className="relative h-56 overflow-hidden rounded-lg border border-white/10 bg-black/20 md:h-96">
                  {project.demos.map((demo, index) => (
                    <div
                      key={demo.src}
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={demo.src}
                        className="absolute block h-full w-full object-contain"
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
                      className={`h-3 w-3 rounded-full transition ${
                        index === currentSlide ? 'bg-white' : 'bg-white/45 hover:bg-white/70'
                      }`}
                      aria-current={index === currentSlide}
                      aria-label={`Slide ${index + 1}`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
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
