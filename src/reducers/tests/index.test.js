import trelloAppReducer from "../index";
import {
  UPDATE_CARD,
  DELETE_CARD,
  MOVE_CARD,
  SET_OPEN_ADD_CARD
} from "../../constants/actionTypes";

describe("trello app reducer", () => {
  it("should handle UPDATE_CARD", () => {
    expect(
      trelloAppReducer(
        {
          boardData: {
            lists: [{ id: "111", cards: [{ id: "123", title: "Abc" }] }]
          }
        },
        {
          type: UPDATE_CARD,
          listId: "111",
          cardData: {
            id: "123",
            title: "Abc"
          }
        }
      )
    ).toEqual({
      boardData: {
        lists: [{ id: "111", cards: [{ id: "123", title: "Abc" }] }]
      }
    });
  });

  it("should handle DELETE_CARD", () => {
    expect(
      trelloAppReducer(
        {
          boardData: {
            lists: [{ id: "111", cards: [{ id: "123", title: "Abc" }] }]
          }
        },
        {
          type: DELETE_CARD,
          listId: "111",
          cardId: "123"
        }
      )
    ).toEqual({
      boardData: {
        lists: [{ id: "111", cards: [] }]
      }
    });
  });

  it("should handle MOVE_CARD", () => {
    expect(
      trelloAppReducer(
        {
          boardData: {
            lists: [
              { id: "111", cards: [{ id: "123", title: "Abc" }] },
              { id: "112", cards: [{ id: "321", title: "Def" }] }
            ]
          }
        },
        {
          type: MOVE_CARD,
          sourceListId: "111",
          sourceCardIndex: "0",
          destListId: "112",
          destCardIndex: "0"
        }
      )
    ).toEqual({
      boardData: {
        lists: [
          { id: "111", cards: [] },
          {
            id: "112",
            cards: [
              { id: "123", title: "Abc" },
              { id: "321", title: "Def" }
            ]
          }
        ]
      }
    });
  });

  it("should handle SET_OPEN_ADD_CARD", () => {
    expect(
      trelloAppReducer(
        {
          boardData: {
            lists: [{ id: "111", cards: [{ id: "123", title: "Abc" }] }],
            openAddCardListID: undefined
          }
        },
        {
          type: SET_OPEN_ADD_CARD,
          listId: "111"
        }
      )
    ).toEqual({
      boardData: {
        lists: [{ id: "111", cards: [{ id: "123", title: "Abc" }] }],
        openAddCardListID: "111"
      }
    });
  });
});
