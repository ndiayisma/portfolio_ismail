import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

export const Documents = () => {
    const [expandedPdf, setExpandedPdf] = useState(null);

    const documents = [
        {
            title: "Mon CV",
            file: "CV_Ismail.pdf",
        },
        {
            title: "Veille Informatique",
            file: "veille_info.pdf",
        },
        {
            title: "Tableau de Synthèse",
            file: "tableau_synthese.pdf",
        }
    ];

    return (
        <section id="documents" className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-black to-slate-900">
            <RevealOnScroll>
                <div className="max-w-6xl w-full">
                    <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Mes Documents</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {documents.map((doc, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border-2 border-cyan-400 overflow-hidden hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
                            >
                                {/* Aperçu PDF */}
                                <div className="w-full h-64 bg-black border-b-2 border-cyan-400 overflow-hidden">
                                    <iframe
                                        src={`${doc.file}#toolbar=0&navpanes=0`}
                                        className="w-full h-full"
                                        title={`Aperçu ${doc.title}`}
                                    />
                                </div>

                                {/* Contenu */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                                        {doc.title}
                                    </h3>
                                    <a
                                        href={doc.file}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full block text-center px-4 py-2 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-colors"
                                    >
                                        Voir
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}
