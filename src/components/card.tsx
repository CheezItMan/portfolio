import React from "react";
import './card.css'

type CardProps = {
    img: string, 
    altText: string, 
    title: string, 
    description: string,
    url: string
}

const Card: React.FC<CardProps> = ({ img, altText, title, description, url }: CardProps) => {
    return(
        <div className="col d-flex justify-content-center">
            <div className="card m-4 min-vw-50">
                <a href={url} target="_blank" rel="noreferrer"><img src={img} className="card-img-top" alt={altText} /></a>
                <div className="card-body">
                    <a href={url} target="_blank" rel="noreferrer"><h5 className="card-title">{title} <i className="fas fa-external-link-alt"></i></h5></a>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )   
}

export default Card; 