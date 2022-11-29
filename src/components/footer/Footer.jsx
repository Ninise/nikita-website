import React from "react";
import "./footer.css";


export const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Nikitin</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonial" className="footer__link">Testimotials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.facebook.com/nikitin.ninise" className="footer__social-link" target="_blank">
                        <i className="bx bxl-facebook"></i>
                    </a>
                
                    <a href="https://www.instagram.com/niniseee" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    
                    <a href="https://twitter.com/DevNinise" className="footer__social-link" target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Nikita Nikitin. All rigths reserved 2022</span>
            </div>
        </footer>
    );

}