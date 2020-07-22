import React, { useState } from 'react'
import axios from 'axios'

import './Form.css'

const Form = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [github, setGithub] = useState('')
    const [deployed, setDeployed] = useState('')
    const [screen, setScreen] = useState()

    const getNewProject = (e) => {
        const url = 'http://localhost:8000/project'
        axios({
            method: 'post',
            url: url,
            data: {
                name: name,
                description: description,
                urlGithub: github,
                urlDeployed: deployed,
                screen: screen
            }
        })
        e.preventDefault()
    }

    return(
        <div>
            <form>
                <fieldset>
                    <legend>Ajouer un nouveau projet</legend>
                    <div className='form'>
                        <input type='text' placeholder='Nom du projet' onChange={((e) => setName(e.target.value))} />
                        <input type='text' placeholder='Description du projet' onChange={((e) => setDescription(e.target.value))} />
                        <input type='text' placeholder='Url github' onChange={((e) => setGithub(e.target.value))} />
                        <input type='text' placeholder='Url du projet déployé' onChange={((e) => setDeployed(e.target.value))} />
                        <input type='file' placeholder='Url du projet déployé' onChange={((e) => setScreen(e.target.files[0]))} />
                        <button type='submit' onClick={(e) => getNewProject(e)} >Envoyer</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Form