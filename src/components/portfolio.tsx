import React from "react";
import './portfolio.css'
import Card from './card';

const projects = [
    {
        title: "Project 1",
        description: "This is the description for project 1",
        img: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
        url: "https://github.com/"
    },
    {
        title: "Project 2",
        description: "This is the description for project 2",
        img: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
        url: "https://github.com/"
    }, 
    {
        title: "Project 3",
        description: "This is the description for project 3",
        img: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
        url: "https://github.com/"
    },
    {
        title: "Project 4",
        description: "This is the description for project 4",
        img: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
        url: "https://github.com/"
    },
    {
        title: "Project 5",
        description: "This is the description for project 5",
        img: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
        url: "https://github.com/"
    }
]

const Portfolio: React.FC = () => {
    return(
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
        </div>
    )
}

export default Portfolio;