import React from React.js;

function SkillsCard ({skillImg, skillName}) {
    return (
        <div className="skillCard">
            <img src={skillImg} height="100px" weight="100px"/>
            <p>{skillName}</p>
        </div>
    );
}
export default SkillsCard;