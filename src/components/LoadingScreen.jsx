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

    const progress = (index / fullName.length) * 100;

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 z-50">
            <div className="flex flex-col items-center gap-8">
                <div className="text-4xl font-bold text-cyan-400">
                    {text}<span className="animate-pulse ml-1">|</span>
                </div>

                <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-200"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
    