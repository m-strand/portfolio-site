import React from React.js;

function ProjectCard ({preview, name, description, demo, repo, langs}) {
    return (
        <div className="projectCard">
                <img src={preview} height="100px" width="100px"/>
                <h3>{name}</h3>
                <p>{description}</p>
                <a className="projectLinks" href={demo}>DEMO</a>
                <a className="projectLinks" href={repo}>REPO</a>
                <div className="langDiv">
                    {langs.forEach((lang) => {
                        <p className="langs">{lang}</p>
                    }
                    )}
                </div>
        </div>
    )
}
export default ProjectCard;
