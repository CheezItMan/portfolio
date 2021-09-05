import React from "react";
import Typewriter from 'typewriter-effect';
import './splash.css'

type SplashProps = {
    name: string, 
    skills: string[]
}

const Splash: React.FC<SplashProps> = ({name, skills}: SplashProps) => {
    return(
        <div className="portfolio__splash content" >
            <h2>{name}</h2>
            <Typewriter
                onInit={(typewriter => {
                    for (let i = 0; i < skills.length; i++) {
                        let skill = skills[i]
                        typewriter.typeString(`I'm a ${skill}`)
                        .deleteAll()
                        .start()
                    }
                })}
                options={{loop:true}}
            />
        </div>
    )
}


export default Splash; 