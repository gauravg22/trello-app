import React from "react";
import ListContainer from "../containers/ListContainer";
import './styles/Board.css';

const Board = ({data, onMoveCard, onShowAddCard}) => {
    let sourceListId = null;
    let sourceCardIndex = null;

    let destListId = null;
    let destCardIndex = null;

    const onDragStart = (listId, obj) => {
        if(obj.isSource)
            sourceListId = listId;
    }

    const onDrop = (listId, obj) => {
        if(obj.removedIndex !== null){
            sourceCardIndex = obj.removedIndex;

            if(destCardIndex !== null)
                 onMoveCard({sourceListId, sourceCardIndex, destListId, destCardIndex}); 
        }

        if(obj.addedIndex !== null){
            destListId = listId;
            destCardIndex = obj.addedIndex;

            if(sourceCardIndex !== null)
                onMoveCard({sourceListId, sourceCardIndex, destListId, destCardIndex});
        }
    } 

    return(
        <div className="board-wrapper">
            <header className="board-header">Project Board</header>
           
            <div className="board-content">
                {
                    data.lists.map(list => (
                        <ListContainer key={list.id} listId = {list.id} showAddCard={data.openAddCardListID === list.id}
                                onCardDragStart={(obj) => onDragStart(list.id, obj)} 
                                onCardDrop={(obj) => onDrop(list.id,obj)}
                                onShowAddCard={(listId) => onShowAddCard({listId})}> 
                        </ListContainer>   
                    ))
                }
            </div>
        </div>
    )
}

export default Board