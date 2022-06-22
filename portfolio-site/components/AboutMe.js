import React from React.js;

function AboutMe () {
    return (
        <div className="about">
            <div>
                    <h2 className="section"><span class="section-text">ABOUT <span class="circled">ME</span></span></h2>
                    <p className="personal">I am a Full-stack Developer with experience in building applications using Javascript, React, Ruby, Ruby on Rails and SQL.</p>
                    <p className="personal">I'm a creative problem solver with an interest in building products that are clean and intuitive. Previous to being a developer, I worked as a Senior Operations Associate in which I've been able to be a part of helping to test and improve product features implemented by developers.</p>
                    <p className="personal">I now want to move into a developer role so that I can take my experience in supervising the implementation of new features and utilze it in how I design features by anticipating concerns or needs that will occur downstream. </p>
                    <p className="personal">When I'm not behind my computer, I'm trying out a new coffee shop in my neighborhood, reading my latest book shop find, or taking walks around Brooklyn.</p>
                    <button className="greenBtn">VIEW RESUME</button>
            </div>
         
            <div className="currently">
                    <h2 className="current">CURRENTLY...</h2>
                    <div className="imgContainer">
                        <div className="currentCard">
                            <p className="currentlyText">LISTENING TO</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYnMKUKjNKW6gwLHTL8J5ZNZzCWOpJkS3Gg&usqp=CAU" className="currentlyImg" />
                            <p className="currentlyText">Dance Fever by Florence + The Machine</p>
                        </div>
            
                        <div className="currentCard">
                            <p className="currentlyText">READING</p>
                            <img className="currentlyImg" src="https://www.porchlightbooks.com/globalassets/book-covers/9780374279752.jpg?w=1000&scale=both&mode=crop&u=637884987088830000" />
                            <p className="currentlyText">User Friendly: How the hidden rules of design are changing the way we live, work, and play by Cliff Kuang</p>
                        </div>
            
                        <div className="currentCard">
                            <p className="currentlyText">WATCHING</p>
                            <img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" className="currentlyImg" />
                            <p className="currentlyText">Don't Worry Darling</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default AboutMe;