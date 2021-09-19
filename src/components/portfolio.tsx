import React, { FormEvent } from 'react';
import './portfolio.css'
import Card from './card';
import AddProjectForm from './addprojectform';
import { ProjectProps } from '../App';

type PortfolioProps = {
    onFormSubmit: (event: FormEvent) => void,
    onFormFieldChange: (event: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
    formFields: {
        img: string,
        altText: string,
        title: string, 
        description: string,
        url: string
    },
    projects: ProjectProps[]
}

const Portfolio: React.FC<PortfolioProps> = ({ onFormSubmit, onFormFieldChange, formFields, projects }: PortfolioProps) => {
    return(
        <React.Fragment>
            <div className="background">
                <h2>Portfolio</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                <div className="row">
                    {projects.map((project) => {
                        return(
                            <Card img={project.img} altText={project.altText} title={project.title} description={project.description} url={project.url} />
                        )})
                    }
            </div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Project Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <AddProjectForm onFormSubmit={onFormSubmit} onFormFieldChange={onFormFieldChange} formFields={formFields} />
                    </div>
                    </div>
                </div>
                </div>
                <button type="button" className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-plus"></i></button>
            </div>
        </React.Fragment>
    )
};

export default Portfolio;
