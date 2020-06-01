import React from "react";
import { mount } from "enzyme";
import initialState from "../../store/initialState";
import Board from "../Board";
import { Provider } from "react-redux";
import store from "../../store";

it("trello board should render all lists", () => {
  const BoardWrapper = mount(
    <Provider store={store}>
      <Board data={initialState.boardData} />
    </Provider>
  );
  expect(BoardWrapper.find(".list-wrapper")).toHaveLength(
    initialState.boardData.lists.length
  );
});
