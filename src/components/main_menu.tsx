import React from "react";

import './main_menu.css';

export type LinkEntry = {
    icon: string,
    text: string,
    url: string,
    active: boolean | undefined,
}
type MainMenuProps = {
    links: LinkEntry[]
}

const MainMenu: React.FC<MainMenuProps> = (props: MainMenuProps) => {
    // TODO:  Add key prop
   const linksJSX: JSX.Element[] = props.links.map(link => {
        return( 
        <li key={link.url}>
            <a href={link.url} className={ link.active ? 'active': ''}>{ link.icon ? <i className={link.icon}></i> : ''} {link.text}</a>
        </li>)
    });

    return(
    <div>
        <ul className="portfolio__main_menu">
            {linksJSX}
        </ul>
    </div>);
}


export default MainMenu; 