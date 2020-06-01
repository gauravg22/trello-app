import React, {useState, useRef, useEffect} from "react";
import deleteIcon from '../icons/bin.svg';
import './styles/Card.css';
import addIcon from '../icons/plus.png';

const Card = ({data, onDeleteCard, onUpdateCard, onAddCard, editModeInp, onAddCancel}) => {
    const [editMode, setEditMode] = useState(editModeInp ? editModeInp : '');
    const cardInputEl = useRef(null);

    const addCard = () => {
        if(!cardInputEl.current.value.trim())
            return;
        
        onAddCard({title : cardInputEl.current.value});
        cardInputEl.current.value = '';
    }

    const updateCard = () => {
        if(!cardInputEl.current.value.trim())
            return;
        
        onUpdateCard(Object.assign({}, data, {title : cardInputEl.current.value}));
        setEditMode(false);
    }
    
    const checkForEnter = (e) => {
        let code = e.keyCode ? e.keyCode : e.which;
        if(code === 13){
            editMode === 'update' ? updateCard() : addCard();
            e.stopPropagation();
        }
    }
    
    useEffect(() => {
        if(cardInputEl && cardInputEl.current){
            if(!data){
                cardInputEl.current.value = '';
            }
            cardInputEl.current.focus()
            cardInputEl.current.setSelectionRange(cardInputEl.current.value.length,cardInputEl.current.value.length)
        }
    });

    return(
        <React.Fragment>
            {editMode && 
                <div className="list-card-edit">
                    <textarea ref={cardInputEl} className="card-add-input" placeholder="Enter card info" 
                                defaultValue={data && data.title ? data.title : ''} onKeyPress={checkForEnter}/>
                    <div>
                        <input className="list-card-save" type="button" value={editMode === 'update' ? 'Update' : 'Add Card'} 
                                onClick={editMode === 'update' ? updateCard : addCard}/>
                        <span className="card-cancel-save" onClick={() => editMode === 'update' ? setEditMode(''): onAddCancel()}><img src={addIcon} alt="cancel" /></span>
                    </div>
                </div>
            }
            {!editMode &&  
                <div className="list-card" onClick={() => setEditMode('update')}>
                    <span className="list-card-info"> {data.title} </span>
                    <img className="card-delete-icon hide" src={deleteIcon} alt='del' onClick={() => onDeleteCard()} />
                </div>
            }

        </React.Fragment>
    )
}

export default Card