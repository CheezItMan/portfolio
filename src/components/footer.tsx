import React from 'react';
import './footer.css';
import { FaCopyright } from 'react-icons/fa';

const Footer: React.FC = () => {
    return(
        <footer className="portfolio__footer">
            <FaCopyright style={{marginRight: '5px', marginTop: '5px'}}/>
            <p>Chris McNally & Roshni Patel</p>
        </footer>
    )
};

export default Footer;