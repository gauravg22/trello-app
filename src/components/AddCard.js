import React, {useEffect} from "react";
import Card from './Card';
import './styles/AddCard.css';
import addIcon from '../icons/plus.png';

const AddCard = ({onAddCard, onClick, mode, onShowAddCard, onCancelAddCard}) => {

    useEffect(() => {
        if (mode === 'add'){
            onClick();
        }
    });

    return(
        <React.Fragment>
            {mode === 'add' && 
                <Card editModeInp='add' onAddCard={onAddCard} onAddCancel={() => onCancelAddCard()}> </Card>
            }
            {!mode && 
                <div className="add-card" onClick={() => onShowAddCard()}> 
                    <img className="add-icon" src={addIcon} alt='add' /> <span> Add a card </span>
                </div>
            }
        </React.Fragment>
    )
}

export default AddCard