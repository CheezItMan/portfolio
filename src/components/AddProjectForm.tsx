import React, { FormEvent, useRef } from 'react';
import './addprojectform.css';
import { ProjectInterface  } from './portfolio';


export interface ProjectData {
    id: string;
    title: string;
    img: string;
    altText: string;
    description: string;
    url: string;
}


export interface AddProjectProps extends ProjectData  {
    setProject: (project: ProjectInterface) => void;    
    updateProjectFields: (project: ProjectInterface) => void;
}

export const AddProjectForm: React.FC<AddProjectProps> = ({ id, setProject, updateProjectFields, title, img, altText, description, url }: AddProjectProps) => {

    const dismissButtonRef = useRef<HTMLButtonElement | null>(null);

    const formFields = {
        id, title, img, altText, description, url
    }


    const onFormFieldChange = (event: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const newFormData = {
            ...formFields 
        };
    
        switch (event.currentTarget.name) {
            case 'title': 
            case 'img':
            case 'altText':
            case 'description':
            case 'url': 
                newFormData[event.currentTarget.name] = event.currentTarget.value;
        }
    
        updateProjectFields(newFormData); 
    };

    const onFormSubmit = (event: FormEvent) => {
        event.preventDefault();
    
        const newProject = {
            id,
            title: formFields.title,
            img: formFields.img,
            altText: formFields.altText,
            description: formFields.description,
            url: formFields.url
        }
    
        setProject(newProject);
        dismissButtonRef.current?.click();
    };

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
                <button type="button" ref={dismissButtonRef} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>;
                <button type="submit" onClick={onFormSubmit} className="btn btn-primary">{ id === '' || !id ? 'Add' : 'Update'} Project</button>
            </div>
        </React.Fragment>
    )
}
