import React from 'react';
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import './avatar.css'

type AvatarProps = {
    owner: string,
    avatarPic: string,
};

const Avatar = ({ owner, avatarPic }: AvatarProps) => {
    return <div>
        <img className="portfolio__avatar" src={avatarPic} alt={owner} />
          <h1><a href="/">{owner}</a></h1>
          <div className="portfolio__social">
            <FiTwitter style={{margin: '5px'}}/>
            <FiLinkedin style={{margin: '5px'}} />
          </div>
    </div>;
}

export default Avatar;