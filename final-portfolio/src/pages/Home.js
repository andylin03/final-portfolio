import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {

    return (
        <div className="home">
            <div className="about">
                <h2> Hi, My Name is Andy Lin</h2>
                <div className="prompt">
                    <p> A software developer with a passion to learn and create. Software developer with a demonstrated hisotry of working on production web and mobile applications.
                        I have a deep understanding and technical expertise in Computer Science Fundamantals.
                    </p>
                    <a href={"https://www.linkedin.com/in/andy-lin-863583173"} target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>

                    <a href={"mailto:andylin844@gmail.com"} target="_blank" rel="noopener noreferrer">
                        <EmailIcon />
                    </a>

                    <a href={"https://github.com/andylin03"} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                    </a>

                </div>
            </div>
            <div className="skills">

                <h1> Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>
                            ReactJS, Angular, HTML, CSS, React Native, NPM,
                            BootStrap, MaterialUI, Yarn
                        </span>
                    </li>
                    <li className="item">
                        <h2> Back-End</h2>
                        <span>
                            NodeJS, ExpressJS, MySQL MongDB, AWS S3,
                            MS SQL
                        </span>
                    </li>
                    <li className="item">
                        <h2> Languages</h2>
                        <span>
                            JavaScript, Python, Java, C+
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
