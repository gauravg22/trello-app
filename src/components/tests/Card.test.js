import React from "react";
import { mount } from "enzyme";
import initialState from "../../store/initialState";
import Card from "../Card";
import { Provider } from "react-redux";
import store from "../../store";

it("card should render card with correct data", () => {
  const ListWrapper = mount(
    <Card data={initialState.boardData.lists[0].cards[0]} />
  );
  expect(ListWrapper.find(".list-card-info")).toIncludeText(
    initialState.boardData.lists[0].cards[0].title
  );
});
