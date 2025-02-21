import React, { useState, useEffect } from 'react';

import './styles/CookieConsent.scss';

const CookieConsent = () => {
    const [isConsentGiven, setIsConsentGiven] = useState(false);

    useEffect(() => {
        // Проверка, дали ли уже согласие
        const consent = localStorage.getItem('cookieConsent');
        if (consent === 'true') {
            setIsConsentGiven(true);
        }
    }, []);

    const handleAccept = () => {
        // Сохранение согласия в localStorage
        localStorage.setItem('cookieConsent', 'true');
        setIsConsentGiven(true);
    };

    if (isConsentGiven) return null; // Если согласие уже дано, не показываем уведомление

    return (
        <div className='cookie-container'>
            <p className='cookie-text'>
                Мы используем файлы cookie для улучшения работы сайта, анализа статистики и рекламных целей. Продолжая использовать сайт, вы соглашаетесь на использование cookie.
            </p>
            <button className='cookie-button' onClick={handleAccept}>
                Согласен
            </button>



        </div>
    );
};



export default CookieConsent;
