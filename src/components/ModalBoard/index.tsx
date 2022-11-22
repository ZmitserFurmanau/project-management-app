import * as React from 'react';
import { ICard } from '../BoardsLists';
import { Button } from '../Button';
import './ModalBoard.scss'

interface IModalProps {
    closeModal: () => void
    addDataCard: (data: ICard) => void
}

export const ModalBoard: React.FunctionComponent<IModalProps> = (props) => {

    const [titleBoard, setTitleBoard] = React.useState<string>();
    const [descriptionBoard, setDescriptionBoard] = React.useState<string>();
    const [isVisibleErrorTitle, setIsVisibleErrorTitle] = React.useState<boolean>(false)
    const [isVisibleErrorDescription, setIsVisibleErrorDescription] = React.useState<boolean>(false)

    
    const titleOnChange = (e: React.SyntheticEvent<EventTarget>) => {
        if (e.currentTarget) {
            setTitleBoard((e.target as HTMLInputElement).value)
            setIsVisibleErrorTitle(false)
            console.log(titleBoard);
        }
        
        
    }

    const descriptionOnChange = (e: React.SyntheticEvent<EventTarget>) => {
        if (e.currentTarget) {
            setDescriptionBoard((e.target as HTMLInputElement).value)
            setIsVisibleErrorDescription(false)
            console.log(descriptionBoard);
        }
        
    }

    const onClick = () => {
        if (!titleBoard) {
            setIsVisibleErrorTitle(true)
        }
        if (!descriptionBoard) {
            setIsVisibleErrorDescription(true)
        }
        props.addDataCard({title: titleBoard, description: descriptionBoard});
        
    }

    return (
        <div id="myModal" className="modal">

            <div className="modal-content">
                <span className="close" onClick={props.closeModal}>&times;</span>
                <h3>Create a board</h3>
                <div className='wrapper-input'>
                    <label>Title</label>
                    <input type="text" className='input-name-board' onChange={titleOnChange}/>
                    {isVisibleErrorTitle && 
                    <span className='error-modal'>Fill in this field!</span>}
                    <label>Description</label>
                    <textarea className='textarea-description' onChange={descriptionOnChange} />
                    {isVisibleErrorDescription && 
                    <span className='error-modal'>Fill in this field!</span>}
                    <Button name='Create' onClick={onClick}/>
                </div>

            </div>
        </div>
    )
};


