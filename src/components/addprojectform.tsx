import React, { useState, FormEvent } from 'react';
import './addprojectform.css';

// type AddProjectProps = {
//     title: string,
//     img: string,
//     altText: string,
//     description: string,
//     url: string 
// }

// const AddProjectForm: React.FC<AddProjectProps> = ( { title, img, altText, description, url }) => {
const AddProjectForm: React.FC = () => {

    const [formFields, setFormFields] = useState({
        title: '',
        img: '',
        altText: '',
        description: '',
        url: ''
    })

    const onFormFieldChange = (event: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        // const fieldName = event.currentTarget.name;
        // const newValue = event.currentTarget.value;
    
        const newFormData = {
            ...formFields 
        };
    
        // newFormData[fieldName] = newValue;
        switch (event.currentTarget.name) {
            case 'title': 
            case 'img':
            case 'altText':
            case 'description':
            case 'url': 
                newFormData[event.currentTarget.name] = event.currentTarget.value;
        }

        setFormFields(newFormData); 
    };

    // const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const onFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        
        setFormFields({
            title: '',
            img: '',
            altText: '',
            description: '',
            url: ''
        });
    };

    return(
        <>
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Project Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <section className="portfolio__add__project__form col-lg-6 col-md-6 d-flex shadow-lg p-3 mb-5 bg-white rounded">
                            <form onSubmit={onFormSubmit}>
                                <div className="row d-flex">
                                    <div className="form-group col-md-6 col-sm-12 p-2">
                                        <label htmlFor="title">Title</label>
                                        <input type="text" name="title" value={formFields.title} onChange={onFormFieldChange} className="form-control" placeholder="The title of your project" data-rule="minlen:1" data-msg="Please enter a title"/>
                                        <div className="validate"></div>
                                    </div>
                                    <div className="form-group col-md-6 col-sm-12 p-2">
                                        <label htmlFor="img">Image</label>
                                        <input type="text" name="img" value={formFields.img} onChange={onFormFieldChange} className="form-control" placeholder="A link to an image for your project" data-rule="minlen:1" data-msg="Please enter a link to an image"/>
                                        <div className="validate"></div>
                                    </div>
                                    <div className="form-group col-md-6 col-sm-12 p-2">
                                        <label htmlFor="altText">Image Alt Text</label>
                                        <input type="text" name="altText" value={formFields.altText} onChange={onFormFieldChange} className="form-control" placeholder="Alt text for your project's image" data-rule="minlen:1" data-msg="Please enter alt text for the project image" />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="form-group col-md-6 col-sm-12 p-2">
                                        <label htmlFor="url">Link</label>
                                        <input type="text" name="url" value={formFields.url} onChange={onFormFieldChange} className="form-control" placeholder="A link to your project" data-rule="minlen:1" data-msg="Please enter a link to the project" />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="form-group col-md-6 col-sm-12 p-2">
                                        <label htmlFor="description">Description</label>
                                        <textarea name="description" value={formFields.description} onChange={onFormFieldChange} className="form-control" placeholder="A description of your project" data-rule="minlen:1" data-msg="Please enter a description" />
                                        <div className="validate"></div>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" onClick={onFormSubmit} className="btn btn-primary">Add Project</button>
                    </div>
                </div>
                </div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-plus"></i></button>
            </div>
        </>
    )
}

export default AddProjectForm;