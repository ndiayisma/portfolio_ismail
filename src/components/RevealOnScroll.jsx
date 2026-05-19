import React from 'react';


export const RevealOnScroll = ({children}) => {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(ref.current);
            }
        },
        {
            threshold: 0.1, rootMargin: '0px 0px -50px 0px'
        });

        if (ref.current) {
            observer.observe(ref.current);
            // Vérifier si l'élément est déjà visible au chargement
            const rect = ref.current.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setIsVisible(true);
            }
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
    <div ref={ref} className={`reveal ${isVisible ? 'revealed' : ''}`}>
        {children}
    </div>
  );
}