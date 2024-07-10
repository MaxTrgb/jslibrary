import React, { useState } from 'react';
import './magicBall-styles.css';

function MagicBall() {
    const [activeLanguage, setActiveLanguage] = useState('en');
    const [message, setMessage] = useState('Ask a question');
    const [isShaking, setIsShaking] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const messages = ["Yes", "No", "Maybe", "Ask later"];

    const handleLanguageChange = (event, language) => {
        event.preventDefault();
        setActiveLanguage(language);
    };

    const changeMessage = () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        setMessage(messages[randomIndex]);
        setIsVisible(false);
        setIsShaking(true);
        setTimeout(() => {
            setIsShaking(false);
            setIsVisible(true);
        }, 500);

    };

    return (
        <div className='magicBallContainer'>
            <div className='switchLanguage'>
                <a
                    href="/en/"
                    title="English"
                    className={`switchLanguage-item ${activeLanguage === 'en' ? 'active' : ''}`}
                    onClick={(e) => handleLanguageChange(e, 'en')}
                >
                    en
                </a>
                <a
                    href="/ua/"
                    title="Українська"
                    className={`switchLanguage-item ${activeLanguage === 'ua' ? 'active' : ''}`}
                    onClick={(e) => handleLanguageChange(e, 'ua')}
                >
                    ua
                </a>
            </div>
            <div className={`ballContainer ${isShaking ? 'shake' : ''}`}>
                <div
                    className='shakeBallButton'
                    style={{ backgroundImage: "url('https://8-gund.com/assets/img/ball.png')" }}
                >
                    <div
                        className={`ballInBall ${isVisible ? 'visible' : 'hidden'}`}
                        style={{ backgroundImage: "url('https://8-gund.com/assets/img/ball-hole.png')" }}
                        onClick={changeMessage}
                    >
                        <span className="ball-text">{message}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MagicBall;
