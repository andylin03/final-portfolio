import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn"; 
import TwitterIcon from "@material-ui/icons/Twitter"; 
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
