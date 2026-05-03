import React, { useState, useEffect } from 'react'

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const fullName = '<Ismail/>';

    useEffect(() => {
        if (index < fullName.length) {
            const timer = setTimeout(() => {
                setText(fullName.substring(0, index + 1));
                setIndex(index + 1);
            }, 100);

            return () => clearTimeout(timer);
        } else if (onComplete) {
            // Call the completion callback when typing is done
            const delayBeforeComplete = setTimeout(() => {
                onComplete();
            }, 500);
            return () => clearTimeout(delayBeforeComplete);
        }
    }, [index, onComplete, fullName]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 z-50">
            <div className="text-4xl font-bold text-cyan-400">
                {text}<span className="animate-pulse ml-1">|</span>
            </div>
        </div>
    );
}
    