import React from 'react';
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
import './avatar.css'

type AvatarProps = {
    owner: string,
    avatarPic: string,
    twitterUrl: string,
    linkedinUrl: string,
    githubUrl: string
};

const Avatar = ({ owner, avatarPic, twitterUrl, linkedinUrl, githubUrl }: AvatarProps) => {
    return <div>
        <img className="portfolio__avatar" src={avatarPic} alt={owner} />
          <h1><a href="/">{owner}</a></h1>
          <div className="portfolio__social">
            <a href={twitterUrl} target="_blank" rel="noreferrer"><FiTwitter style={{margin: '5px'}}/></a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer"><FiLinkedin style={{margin: '5px'}} /></a>
            <a href={githubUrl} target="_blank" rel="noreferrer"><FiGithub style={{margin: '5px'}} /></a>
          </div>
    </div>;
}

export default Avatar;