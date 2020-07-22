import React, { useState, useEffect } from 'react'
import Form from './Form'
import Project from './Project'
import axios from 'axios'

const ProjectsList = () => {
    const [projects, setProjects] = useState([])
    const [loaded, setLoaded] = useState(false)


    const getProjects = () => {
        const url = 'http://localhost:8000/allprojects'
        axios.get(url)
        .then(res => {
            setProjects(res.data)
            setLoaded(true)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getProjects()
    }, [])

    return(
        <div>
            <p>Liste des projets</p>
            {
                loaded ? 
                <ul>
                    {
                    projects.map((project, i) => 
                        <Project key={i} name={project.name} des={project.description} urlGit={project.urlGithub} urlDep={project.urlDeployed} />
                    )
                }
                </ul>
                :
                <p>Loading</p>
            }
            <Form />
        </div>
    )
}

export default ProjectsList