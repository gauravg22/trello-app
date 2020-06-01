import * as actions from "../index";
import {
  UPDATE_CARD,
  DELETE_CARD,
  MOVE_CARD,
  SET_OPEN_ADD_CARD
} from "../../constants/actionTypes";

describe("trello app actions", () => {
  it("updateCard should create UPDATE_CARD action", () => {
    expect(
      actions.updateCard({
        listId: "111",
        cardData: { id: "123", title: "Abc" }
      })
    ).toEqual({
      type: UPDATE_CARD,
      listId: "111",
      cardData: {
        id: "123",
        title: "Abc"
      }
    });
  });

  it("deleteCard should create DELETE_CARD action", () => {
    expect(actions.deleteCard({ listId: "111", cardId: "123" })).toEqual({
      type: DELETE_CARD,
      listId: "111",
      cardId: "123"
    });
  });

  it("moveCard should create MOVE_CARD action", () => {
    expect(
      actions.moveCard({
        sourceListId: "12",
        sourceCardIndex: "2",
        destListId: "13",
        destCardIndex: "3"
      })
    ).toEqual({
      type: MOVE_CARD,
      sourceListId: "12",
      sourceCardIndex: "2",
      destListId: "13",
      destCardIndex: "3"
    });
  });

  it("SET_OPEN_ADD_CARD should create SET_OPEN_ADD_CARD action", () => {
    expect(actions.setOpenAddCard({ listId: "111" })).toEqual({
      type: SET_OPEN_ADD_CARD,
      listId: "111"
    });
  });
});
