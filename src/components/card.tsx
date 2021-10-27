import React from "react";
import './card.css'

type CardProps = {
    id: string | undefined,
    img: string, 
    altText: string, 
    title: string, 
    description: string,
    url: string,
    deleteCallback?: (str: string) => void,
    updateProjectCallback?: (str: string) => void,
}

const Card: React.FC<CardProps> = ({ id, img, altText, title, description, url, deleteCallback, updateProjectCallback }: CardProps) => {
    return(
        <div className="col d-flex justify-content-center">
            <div className="card m-4 min-vw-50">
                {
                    updateProjectCallback && id ? 
                <button                     
                     data-bs-toggle="modal" 
                     data-bs-target="#exampleModal"
                     type="button"
                     onClick={() => updateProjectCallback(id)}
                     className="btn-edit" 
                     aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                        </svg>
                </button>
                : ''
                }
                { deleteCallback && id ? <button
                     type="button"
                     onClick={() => deleteCallback(id)}
                     className="btn-close" 
                     aria-label="Close">                    
                     </button> : '' 
                }
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