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
        <div className="row portfolio__add__project__form__container">
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
                        <div className="form-row col-medium-12 d-flex align-items-stretch pt-3">
                            <div className="form-group col-md-12">
                                <button onClick={onFormSubmit} className="btn btn-primary btn-md">Add Project</button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default AddProjectForm;