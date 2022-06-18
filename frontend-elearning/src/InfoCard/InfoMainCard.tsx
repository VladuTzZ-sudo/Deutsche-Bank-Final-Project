import React from 'react';
import "./InfoMainCard.css";

export default function InfoMainCard() {
    return (
        <div className="text-part">
            <div className="container-center">
                <h1 className="info-title">Ultimate E-Learning App</h1>
            </div>
            <div className="container-center about-text">
                <h4>Today, when people say “eLearning”, they’re referring to training on any digital device. Watching an educational video,
                    reading an interesting article, or taking a quiz — all that is eLearning.</h4>
            </div>
            <div id="join-text-id" className="container-center join-text">
                <h4>Are you interested?</h4>
            </div>
            <button className="join-btn">Join Us</button>
        </div>
    )
}