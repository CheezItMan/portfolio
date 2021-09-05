import React from "react";

type CardProps = {
    img: string, 
    altText: string, 
    title: string, 
    description: string
}

const Card: React.FC<CardProps> = ({ img, altText, title, description }: CardProps) => {
    return(
        <div className="col d-flex justify-content-center">
            <div className="card m-4 min-vw-50">
                <img src={img} className="card-img-top" alt={altText} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )   
}

export default Card; 