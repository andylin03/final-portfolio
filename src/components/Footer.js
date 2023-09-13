import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import TwitterIcon from '@mui/icons-material/Twitter';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <LinkedInIcon /> 
                <TwitterIcon /> 
            </div>
            <p> &copy; 2023 andylinfullstack.com</p>
        </div>
    );
}

export default Footer;
