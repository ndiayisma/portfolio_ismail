import { useEffect } from 'react';

export const MessageBox = ({ message, type = 'success', isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className={`message-box message-box-${type} pointer-events-auto`}>
                <div className="flex items-center gap-4">
                    <div className={`message-icon message-icon-${type}`}>
                        {type === 'success' && '✓'}
                        {type === 'error' && '✕'}
                        {type === 'info' && 'ℹ'}
                    </div>
                    <p className="text-white font-semibold">{message}</p>
                </div>
            </div>
        </div>
    );
}
