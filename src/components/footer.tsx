import React from 'react';
import './footer.css';

type FooterProps = {
    name: string;
}

const Footer: React.FC<FooterProps> = ({ name }: FooterProps) => {
    const year = new Date().getFullYear()

    return(
        <footer className="portfolio__footer">
            <i className="fas fa-copyright copyright"><span>{year} {name}</span></i>
        </footer>
    )
};

export default Footer;