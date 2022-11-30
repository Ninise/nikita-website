import React from "react";

export const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/niniseee/" className="home__social-icon" target="_blank">
                <i className="uil uil-instagram"></i>
            </a>
            
            <a href="https://www.linkedin.com/in/ninise/" className="home__social-icon" target="_blank">
                <i className="uil uil-linkedin"></i>
            </a>
            
            <a href="https://github.com/ninise" className="home__social-icon" target="_blank" snippet="Hey, wanna check out my code, click here.">
                <i className="uil uil-github-alt"></i>
            </a>
        </div>
    );
}

