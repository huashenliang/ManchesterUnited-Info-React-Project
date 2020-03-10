import React from 'react';
import { UtdLogo } from '../icons';

const Footer = () => {
    return (
        <footer className="bck_red">
            <div className="footer_logo">
                <UtdLogo
                    width="70px"
                    height="70px"
                    link={true}
                    linkTo="/"
                />
            </div>
            <div className="footer_discl">
                Manchester United Info. All rights reservec 
            </div>
            
        </footer>
    );
};

export default Footer;