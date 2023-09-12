import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    console.log("ID:", id); // Log the ID parameter

    const projectId = parseInt(id, 10);
    console.log("Parsed ID:", projectId); // Log the parsed integer

    const project = ProjectList[projectId];
    console.log("Project:", project); // Log the project object

    if (!project) {
        console.log("Project not found"); // Log a message if the project is not found
        return <div className="project">Project not found</div>;
    }

    return (
        <div className="project">
            <h1 className="project-title">{project.name}</h1>
            <img className="project-image" src={project.image} alt={project.name} />
            <p className="project-skills">
                <b>Skills:</b> {project.skills}
            </p>
            <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Live Project
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="github-icon" />
                    GitHub Repository
                </a>
            </div>
        </div>
    )
}

export default ProjectDisplay;


