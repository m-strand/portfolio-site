import React from React.js;
import SkillsCard from "./SkillsCard.js";

function Skills () {
    const skillsArr = [
      {
        "img": "https://cdn-icons-png.flaticon.com/512/2305/2305978.png",
        "name": "HTML"
      }, 
      {
        "img": "https://cdn-icons-png.flaticon.com/512/3094/3094297.png",
        "name": "CSS"
      }, 
      {
        "img": "https://cdn-icons-png.flaticon.com/512/1348/1348026.png",
        "name": "Bootstrap"
      }, 
      {
        "img": "https://cdn-icons-png.flaticon.com/512/6943/6943960.png",
        "name": "Javascript"
      }, 
      {
        "img": "https://cdn-icons.flaticon.com/png/512/1183/premium/1183723.png?token=exp=1655924264~hmac=0d3d6a83af67b40bbe5a4e0e2d1ea83f",
        "name": "React"
      },
      {
        "img": "https://cdn-icons-png.flaticon.com/512/5538/5538659.png",
        "name": "Ruby"
      }, 
      {
        "img": "https://img.favpng.com/9/20/24/ruby-on-rails-computer-icons-rubygems-png-favpng-9WnVhyCb1pZ3LhevCRiUhRtv0.jpg",
        "name": "Ruby on Rails"
      }, 
      {
        "img": "https://cdn-icons-png.flaticon.com/512/2306/2306083.png",
        "name": "SQL"
      }
    ]
    return (
        <div className="skillsContainer">
            <h2 className="section"><span className="section-text">SKILLS</span></h2>
            {skillsArr.map((skill) => {
                <SkillsCard skillImg={skill.img} skillName={skill.name} />
            })}
        </div>
    );
}

export default Skills;

