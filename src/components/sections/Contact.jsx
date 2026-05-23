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
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-12 py-8 text-center">
                    Contactez-moi
                </h1>
                <p className="text-lg text-gray-300 mb-8 text-center">
                    N'hésitez pas à me contacter pour toute question, collaboration ou opportunité professionnelle.
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-slate-900 text-gray-300 border border-gray-600 rounded px-4 py-3 placeholder:text-gray-500 focus:ring-2 transition duration-300 focus:ring-green-400 focus:outline-none"
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
                            className="w-full bg-slate-900 text-gray-300 border border-gray-600 rounded px-4 py-3 placeholder:text-gray-500 focus:ring-2 transition duration-300 focus:ring-green-400 focus:outline-none"
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
                            className="w-full bg-slate-900 text-gray-300 border border-gray-600 rounded px-4 py-3 placeholder:text-gray-500 focus:ring-2 transition duration-300 focus:ring-green-400 focus:outline-none"
                            placeholder="Votre message"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
            </RevealOnScroll>
        </section>
    );
}