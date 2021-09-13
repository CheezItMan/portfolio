import React, { FormEvent } from 'react';
import './addprojectform.css';

type AddProjectProps = {
    onFormSubmit: (event: FormEvent) => void,
    onFormFieldChange: (event: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
    formFields: {
        img: string,
        altText: string,
        title: string, 
        description: string,
        url: string
    }
}

const AddProjectForm: React.FC<AddProjectProps> = ({ onFormSubmit, onFormFieldChange, formFields }: AddProjectProps) => {
    return(
        <React.Fragment>
            <section className="portfolio__add__project__form col-lg-6 col-md-6 d-flex p-3 mb-5 rounded">
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
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" onClick={onFormSubmit} className="btn btn-primary">Add Project</button>
            </div>
        </React.Fragment>
    )
}

export default AddProjectForm;