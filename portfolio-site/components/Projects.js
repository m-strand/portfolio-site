import React from React.js;

function Projects () {
    const projArr = []
    return (
        <div className="projects">
            <h2 className="section"><span className="section-text">PROJECTS</span></h2>
            {projArr.map((project) => {
                <Projectcard preview={project.preview} repo={project.repo} langs={project.langs} name={project.name} />
            })}
        </div>
    )
}

export default Projects;