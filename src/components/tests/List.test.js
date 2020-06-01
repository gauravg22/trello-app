import React from "react";
import { mount } from "enzyme";
import initialState from "../../store/initialState";
import List from "../List";
import { Provider } from "react-redux";
import store from "../../store";

it("list should render all the cards present", () => {
  const ListWrapper = mount(<List data={initialState.boardData.lists[0]} />);
  expect(ListWrapper.find(".list-card")).toHaveLength(
    initialState.boardData.lists[0].cards.length
  );
});

it("list should render correct list heading", () => {
  const ListWrapper = mount(
    <Provider store={store}>
      <List data={initialState.boardData.lists[0]} />
    </Provider>
  );
  expect(ListWrapper.find(".list-heading")).toIncludeText(
    initialState.boardData.lists[0].title
  );
});
