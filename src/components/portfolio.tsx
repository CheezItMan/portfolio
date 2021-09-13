import React from 'react';
import './portfolio.css'
import Card from './card';
import AddProjectForm from './addprojectform';

const projects = [
    {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates debitis aspernatur hic aut ducimus tempore dignissimos nesciunt dolores accusamus doloremque?",
        img: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
        altText: "Project image",
        url: "https://github.com/"
    },
    {
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates debitis aspernatur hic aut ducimus tempore dignissimos nesciunt dolores accusamus doloremque?",
        img: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
        altText: "Project image",
        url: "https://github.com/"
    }, 
    {
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates debitis aspernatur hic aut ducimus tempore dignissimos nesciunt dolores accusamus doloremque?",
        img: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
        altText: "Project image",
        url: "https://github.com/"
    },
    {
        title: "Project 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates debitis aspernatur hic aut ducimus tempore dignissimos nesciunt dolores accusamus doloremque?",
        img: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
        altText: "Project image",
        url: "https://github.com/"
    },
    {
        title: "Project 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates debitis aspernatur hic aut ducimus tempore dignissimos nesciunt dolores accusamus doloremque?",
        img: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
        altText: "Project image",
        url: "https://github.com/"
    }
]

const Portfolio: React.FC = () => {
    return(
        <React.Fragment>
        <div className="background">
            <h2>Portfolio</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <div className="row">
                {projects.map((project) => {
                    return(
                        <Card img={project.img} altText={"project image"} title={project.title} description={project.description} url={project.url} />
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
                        <AddProjectForm />
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
