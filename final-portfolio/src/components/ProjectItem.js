import React from "react";
import Game from '../assets/game.jpg';
import Weather from '../assets/weather.jpg';

function ProjectItem({ image, name }) {
    return (
        <div className="projectItem">
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h1>{name}</h1>
        </div>
    );
}

export default ProjectItem;
