import React from 'react'
import Modal from './Modal'
import useModal from './useModal'
import './Project.css'

const Project = (props) => {
    const { isShowing, toggle } = useModal()
    return(
        <div>
            <p>{props.name}</p>
            <button className="button-default" onClick={toggle}>En savoir plus ...</button>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                name={props.name}
                des={props.des}
                urlGit={props.urlGit}
                urlDep={props.urlDep}
            />
        </div>
    )
}

export default Project