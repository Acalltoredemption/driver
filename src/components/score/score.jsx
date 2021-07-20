import React from 'react'
import './score.css';

export default function Score() {
    return (
        <div>
            <div className="score-container">
                <p className="score">Distance Traveled</p>
                <div className="scoretracker"></div>
            </div>
        </div>
    )
}
