import React, {useRef} from "react";
import Card from './Card';
import AddCard from './AddCard';
import { Container, Draggable } from 'react-smooth-dnd';
import './styles/List.css';

const List = (props) => {
    const {data, listId, onAddCard, onDeleteCard, onUpdateCard, 
            onCardDragStart, onCardDrop, onShowAddCard, showAddCard} = props; 

    const cardsCntrEl = useRef(null);
    
    const scrollCardsCntrToBottom = () => {
        if(cardsCntrEl && cardsCntrEl.current)
            cardsCntrEl.current.scrollTop = cardsCntrEl.current.scrollHeight;
    }

    return(
        <div className="list-wrapper">
                <div className="list-heading"> {data.title} </div>

                <div className={data.cards.length > 0 ? 'list-cards has-cards':'list-cards'} ref={cardsCntrEl}>
                     <Container groupName="list-cards-group" onDragStart={(obj) => onCardDragStart(obj)} 
                                onDrop={(obj) => onCardDrop(obj)} dragClass='rotate-4'>
                        {
                            data.cards.length > 0 && data.cards.map(card => (
                                <Draggable key={card.id}> 
                                    <Card data={card} onDeleteCard={() => onDeleteCard({listId, cardId : card.id})} 
                                            onUpdateCard={(cardData) => onUpdateCard({listId, cardData})}> </Card>   
                                </Draggable>
                            ))
                        }
                    </Container> 
                </div>

                <AddCard mode={showAddCard ? 'add' : ''} onAddCard={(cardData) => onAddCard({listId, cardData})} 
                           onClick={scrollCardsCntrToBottom} onShowAddCard={() => onShowAddCard(listId)} onCancelAddCard={() => onShowAddCard(undefined)} />
        </div>
    )
}


export default List