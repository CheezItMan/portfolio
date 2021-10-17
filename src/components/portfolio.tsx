import React, { useState, useEffect } from 'react';
import './portfolio.css'
import Card from './Card';
import AddProjectForm from './AddProjectForm';
import { useUser } from '../firebase-auth/useFirebaseAuth';
import useFirebase from '../firebase-auth/useFirebase';
import { firebaseConfig } from '../config/firebase-config';
import { collection, getDocs, query, addDoc, deleteDoc, doc } from 'firebase/firestore';

export interface ProjectInterface {
    id?: string,
    altText: string,
    description: string,
    img: string,
    title: string,
    url: string,
}

const Portfolio: React.FC = () => {
    const [projects, setProjects] = useState<ProjectInterface[]>([]);
    const [user] = useUser();
    const { db } = useFirebase(firebaseConfig);

    useEffect(() => {
        if (!db) return;

        const q = query(collection(db, 'projects'));

        const loadProjects = async () => {
            try {
                const snapshot = await getDocs(q);
                console.log(snapshot);
                const data: Array<ProjectInterface> = [];
                snapshot.forEach((doc) => {
                    console.log(doc.data())
                    data.push({
                        id: doc.id,
                        altText: doc.data().altText,
                        description: doc.data().description,
                        img: doc.data().img,
                        title: doc.data().title,
                        url: doc.data().url,
                    });
                });
                console.log('setting project data');
                console.log(data);
                setProjects(data);
            } catch (error) {
                console.log(error);
            }
            
        }
        loadProjects();
    }, [db]);

    const addProject = (newProject: ProjectInterface) => {

        const addDocument = async () => {
            if (!db) return;
            try {
                const docRef = await addDoc(collection(db, 'projects'), {
                    altText: newProject.altText,
                    description: newProject.description,
                    img: newProject.img,
                    title: newProject.title,
                    url: newProject.url,
                });
                console.log('Document written with ID: ', docRef.id);
                const newProjects = [...projects];
                newProjects.push({
                    ...newProject,
                    id: docRef.id,
                });
                setProjects(newProjects);                
            } catch (e) {
                console.error('Error adding document: ', e);
            }
        }

        addDocument();        
    }

    const deleteProject = (id: string) => {
        const removeDocFromFirebase = async () => {
            if (!db) return;
            try {
                await deleteDoc(doc(db, "projects", id));

                console.log('Document removed');
                const newProjects = projects.filter(project => project.id !== id);
                setProjects(newProjects);
            } catch (error) {
                console.log(`Cannot delet doc ${id}`);
                console.log(error);
            }
        }

        removeDocFromFirebase();
    }
    
    return(
        <React.Fragment>
            <div className="background" id="portfolio">
                <h2>Portfolio</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                <div className="row">
                    {projects.map((project) => {
                        return(
                            <Card 
                                key={project.id} 
                                id={ project.id ? project.id : undefined } 
                                img={project.img} 
                                altText={project.altText} 
                                title={project.title} 
                                description={project.description} 
                                url={project.url} 
                                deleteCallback={deleteProject}
                            />
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
                        <AddProjectForm addProject={addProject} />
                    </div>
                    </div>
                </div>
                </div>
                { user ? <button type="button" className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-plus"></i></button> : '' }
            </div>
        </React.Fragment>
    )
};

export default Portfolio;
