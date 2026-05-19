import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
    return (
        <section id="contact" className="scroll-offset py-16 md:py-20" data-aos="fade-up">
            <RevealOnScroll>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-12 py-8 text-center">
                    Contactez-moi
                </h1>
                <p className="text-lg text-gray-300 mb-8 text-center">
                    N'hésitez pas à me contacter pour toute question, collaboration ou opportunité professionnelle.
                </p>
                <form className="space-y-6">
                    <div className="relative">
                        <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">Nom</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-gray-800 text-gray-300 border border-white-300 rounded px-4 py-3 placeholder:text-gray-500 border border-gray-600 focus:ring-2 transition duration-300 focus:ring-green-400 focus:outline-none"
                            placeholder="Votre nom"
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-gray-800 text-gray-300 border border-white-300 rounded px-4 py-3 placeholder:text-gray-500 border border-gray-600 focus:ring-2 transition duration-300 focus:ring-green-400 focus:outline-none"
                            placeholder="Votre adresse email"
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            className="w-full bg-gray-800 text-gray-300 border border-white-300 rounded px-4 py-3 placeholder:text-gray-500 border border-gray-600 focus:ring-2 transition duration-300 focus:ring-green-400 focus:outline-none"
                            placeholder="Votre message"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
            </RevealOnScroll>
        </section>
    );
};