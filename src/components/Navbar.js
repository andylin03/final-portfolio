import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Added 'useLocation' import
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);
    
    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button
                    onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                >
                    <ReorderIcon />
                </button>
            </div>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/experience"> Experience </Link>
                <a href="https://docs.google.com/document/d/1tqZLh51nKi0c19lHevlk7J2_JxEadm9tGfHVAl5KhbA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
            </div>
        </div>
    );
}

export default Navbar;
