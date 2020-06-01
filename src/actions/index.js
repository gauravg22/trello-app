import {ADD_CARD, UPDATE_CARD, DELETE_CARD, MOVE_CARD, SET_OPEN_ADD_CARD} from '../constants/actionTypes';

var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

export const addCard = data => ({
    type: ADD_CARD,
    listId : data.listId,
    cardData : {
        id : ID(),
        ...data.cardData
    }
});

export const updateCard = data => ({
        type : UPDATE_CARD,
        ...data
});

export const deleteCard = data => ({
        type: DELETE_CARD,
        ...data
});


export const moveCard = data => ({
        type: MOVE_CARD,
        ...data
});

export const setOpenAddCard = data => ({
    type: SET_OPEN_ADD_CARD,
    ...data
});