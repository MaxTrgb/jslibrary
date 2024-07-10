import React from 'react';
import './magicBall-styles.css';

function MagicBall() {
    return (
        <div className='magicBallContainer'>
            <div className='switchLanguage'>
                <a href="/en/" title="English" class="switchLanguage-item">en</a>
                <a href="/ua/" title="Українська" class="switchLanguage-item">ua</a>
            </div>
        </div>
    );
}

export default MagicBall;