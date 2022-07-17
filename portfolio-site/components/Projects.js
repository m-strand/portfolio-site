import React from React.js;
import ProjectCard from "./ProjectCard.js";

function Projects () {
    const projArr = [
        {
            preview: {insertobjectlocation},
            repo: "https://github.com/m-strand/airbnb-mock-site",
            demo: "",
            langs: ["HTML", "CSS", "React.js"],
            name: "Airbnb Mock Website"
        }, 
        {
            preview: {insertobjectlocation},
            repo: "https://github.com/m-strand/phase-1-final-project",
            demo: "",
            langs: ["HTML", "CSS", "Javascript"],
            name: "BookFinder"
        }, 
        {
            preview: {insertobjectlocation},
            repo: "",
            demo: "",
            langs: ["HTML", "CSS", "React"],
            name: "Madewell Mock Website"
        }
    ]
    return (
        <div className="projects">
            <h2 className="section"><span className="section-text">PROJECTS</span></h2>
            {projArr.map((project) => {
                <ProjectCard preview={project.preview} repo={project.repo} langs={project.langs} name={project.name} />
            })}
        </div>
    );
}

export default Projects;