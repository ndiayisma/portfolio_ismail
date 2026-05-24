import { RevealOnScroll } from "../RevealOnScroll";
import { MessageBox } from "../MessageBox";
import emailJs from 'emailjs-com';
import { useState, useEffect } from 'react';

export const Contact = () => {
    const [messageBox, setMessageBox] = useState({ isOpen: false, message: '', type: 'success' });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailJs.sendForm(import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                console.log('Email envoyé avec succès :', result.text);
                setMessageBox({
                    isOpen: true,
                    message: 'Merci pour votre message ! Je vous répondrai dès que possible.',
                    type: 'success'
                });
                e.target.reset();
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi de l\'email :', error.text);
                setMessageBox({
                    isOpen: true,
                    message: 'Une erreur est survenue. Veuillez réessayer plus tard.',
                    type: 'error'
                });
            });
    };

    useEffect(() => {
        emailJs.init(import.meta.env.VITE_PUBLIC_KEY);
    }, []);

    return (
        <section id="contact" className="scroll-offset py-16 md:py-20" data-aos="fade-up">
            <MessageBox 
                message={messageBox.message}
                type={messageBox.type}
                isOpen={messageBox.isOpen}
                onClose={() => setMessageBox({ ...messageBox, isOpen: false })}
            />
            <RevealOnScroll>
            <div className="container mx-auto px-4 relative">
                {/* Holographic background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
                <h1 className="text-4xl md:text-5xl font-bold michroma text-cyan-400 mb-4 py-8 text-center relative z-10">
                    Contactez-moi
                </h1>
                <p className="text-lg text-gray-300 mb-8 text-center">
                    N'hésitez pas à me contacter pour toute question, collaboration ou opportunité professionnelle.
                </p>
                <form className="space-y-6 max-w-2xl mx-auto bg-gradient-to-br from-slate-900/50 to-slate-950/50 border-2 border-cyan-400/20 rounded-lg p-8 backdrop-blur-sm relative z-10 hover:border-cyan-400/40 transition-all duration-300" onSubmit={handleSubmit}>
                    <div className="relative">
                        <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-slate-900/70 text-gray-300 border-2 border-cyan-400/30 rounded-lg px-4 py-3 placeholder:text-gray-500 focus:ring-2 transition duration-300 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none hover:border-cyan-400/50"
                            placeholder="Votre nom"
                            required
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-slate-900/70 text-gray-300 border-2 border-cyan-400/30 rounded-lg px-4 py-3 placeholder:text-gray-500 focus:ring-2 transition duration-300 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none hover:border-cyan-400/50"
                            placeholder="Votre adresse email"
                            required
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            className="w-full bg-slate-900/70 text-gray-300 border-2 border-cyan-400/30 rounded-lg px-4 py-3 placeholder:text-gray-500 focus:ring-2 transition duration-300 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none hover:border-cyan-400/50"
                            placeholder="Votre message"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full btn"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
            </RevealOnScroll>
        </section>
    );
}