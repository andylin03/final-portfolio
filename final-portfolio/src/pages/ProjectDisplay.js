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
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} />
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <GitHubIcon />
        </div>
    )
}

export default ProjectDisplay;

