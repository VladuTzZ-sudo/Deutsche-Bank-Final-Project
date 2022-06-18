import React from 'react';
import "./SecondSection.css";

export default function SecondSection() {
    return (
        <div className="second-section">
            <div className="container-center">
                <h1 className="info-title-second-section">Modules</h1>
            </div>
            <div className="row">
                <div className="col col-text-align">
                    <h2 className="col-title">Teacher:</h2>
                    <h4>Upload courses</h4>
                    <h4>Add new quiz</h4>
                    <h4>Report module</h4>
                    <h4>Notification module</h4>
                </div>
                <div className="col col-text-align">
                    <h2 className="col-title">Student:</h2>
                    <h4>Take a quiz</h4>
                    <h4>Personal page</h4>
                    <h4>Report module</h4>
                    <h4>Upload notes</h4>
                </div>
            </div>
        </div>
    )
}