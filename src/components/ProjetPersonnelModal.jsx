import { useState, useEffect } from "react";
import "./ProjetPersonnelModal.css";

export const ProjetPersonnelModal = ({ isOpen, onClose }) => {
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setLoading(true);
            fetch("/ProjetPersonnel/README.md")
                .then((response) => response.text())
                .then((text) => {
                    setContent(text);
                    setLoading(false);
                });
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const parseMarkdown = (text) => {
        const lines = text.split("\n");
        const elements = [];

        lines.forEach((line, index) => {
            if (line.startsWith("# ")) {
                elements.push(
                    <h1 key={index} className="text-3xl font-bold text-orange-400 mb-4">
                        {line.replace("# ", "")}
                    </h1>
                );
            } else if (line.startsWith("## ")) {
                elements.push(
                    <h2 key={index} className="text-2xl font-bold text-orange-400 mb-3 mt-4">
                        {line.replace("## ", "")}
                    </h2>
                );
            } else if (line.startsWith("### ")) {
                elements.push(
                    <h3 key={index} className="text-xl font-bold text-orange-300 mb-2 mt-3">
                        {line.replace("### ", "")}
                    </h3>
                );
            } else if (line.startsWith("- ")) {
                elements.push(
                    <li key={index} className="text-gray-300 ml-4">
                        → {line.replace("- ", "")}
                    </li>
                );
            } else if (line.trim()) {
                elements.push(
                    <p key={index} className="text-gray-300 mb-2">
                        {line}
                    </p>
                );
            }
        });

        return elements;
    };

    return (
        <div className="projet-personnel-modal-overlay" onClick={onClose}>
            <div className="projet-personnel-modal-content" onClick={(e) => e.stopPropagation()}>
                <button
                    className="projet-personnel-modal-close"
                    onClick={onClose}
                >
                    ✕
                </button>

                <div className="projet-personnel-modal-header">
                    <div className="projet-personnel-gradient-blob"></div>
                </div>

                <div className="projet-personnel-modal-body">
                    {loading ? (
                        <div className="flex justify-center items-center h-40">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        <div className="markdown-content">
                            {parseMarkdown(content)}
                        </div>
                    )}
                </div>

                <div className="projet-personnel-particle"></div>
                <div className="projet-personnel-particle" style={{ animationDelay: "0.2s" }}></div>
                <div className="projet-personnel-particle" style={{ animationDelay: "0.4s" }}></div>
            </div>
        </div>
    );
};
