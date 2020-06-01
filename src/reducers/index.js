import update from "immutability-helper";
import { findIndex } from "../utils/arrayUtils";
import {
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  MOVE_CARD,
  SET_OPEN_ADD_CARD
} from "../constants/actionTypes";

const trelloAppReducer = (state, action) => {
  let lists = (state && state.boardData && state.boardData.lists) || [];

  switch (action.type) {
    case ADD_CARD:
      return update(state, {
        boardData: {
          lists: {
            [findIndex(lists, action.listId)]: {
              cards: { $push: [action.cardData] }
            }
          }
        }
      });

    case DELETE_CARD:
      var listIndex = findIndex(lists, action.listId);
      var cardIndex = findIndex(lists[listIndex].cards, action.cardId);

      return update(state, {
        boardData: {
          lists: {
            [listIndex]: {
              cards: {
                $splice: [[cardIndex, 1]]
              }
            }
          }
        }
      });

    case UPDATE_CARD:
      listIndex = findIndex(lists, action.listId);
      cardIndex = findIndex(lists[listIndex].cards, action.cardData.id);

      return update(state, {
        boardData: {
          lists: {
            [listIndex]: {
              cards: {
                [cardIndex]: { $merge: action.cardData }
              }
            }
          }
        }
      });

    case MOVE_CARD:
      const {
        sourceListId,
        sourceCardIndex,
        destListId,
        destCardIndex
      } = action;

      if (sourceListId === destListId && sourceCardIndex === destCardIndex) {
        return state;
      }

      var sourceListIndex = findIndex(lists, sourceListId);
      var destListIndex = findIndex(lists, destListId);
      var sourceCard = lists[sourceListIndex].cards[sourceCardIndex];

      let tempState = update(state, {
        boardData: {
          lists: {
            [sourceListIndex]: {
              cards: {
                $splice: [[sourceCardIndex, 1]]
              }
            }
          }
        }
      });

      return update(tempState, {
        boardData: {
          lists: {
            [destListIndex]: {
              cards: {
                $splice: [[destCardIndex, 0, sourceCard]]
              }
            }
          }
        }
      });

    case SET_OPEN_ADD_CARD:
      return update(state, {
        boardData: {
          openAddCardListID: { $set: action.listId }
        }
      });

    default:
      return state;
  }
};

export default trelloAppReducer;
