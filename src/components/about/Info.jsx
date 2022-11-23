import React from "react";

export const Info = () => {

    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__tile">Experience</h3>
                <span className="about__subtitle">6 Years Working</span>
            </div>

            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__tile">Completed</h3>
                <span className="about__subtitle">30+ Projects</span>
            </div>

            <div className="about__box">
                <i className="bx bx-support about__icon"></i>
                <h3 className="about__tile">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    );

};