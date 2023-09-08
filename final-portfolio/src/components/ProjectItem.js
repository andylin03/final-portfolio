import React from "react";
import { useNavigate } from 'react-router-dom';

function ProjectItem({ image, name, id }) {
    const navigate = useNavigate();

    // Define the URL pattern for project details pages
    const projectDetailsUrl = `/project/${id}`;

    const handleClick = () => {
        // Navigate to the project details page when the item is clicked
        navigate(projectDetailsUrl);
    };

    return (
        <div className="projectItem" onClick={handleClick}>
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h1> {name} </h1>
        </div>
    );
}

export default ProjectItem;

