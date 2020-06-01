import React from "react";
import { mount } from "enzyme";
import initialState from "../../store/initialState";
import AddCard from "../AddCard";
import { Provider } from "react-redux";
import store from "../../store";

it("AddCard should render add-card cta", () => {
  const AddCardWrapper = mount(<AddCard />);
  expect(AddCardWrapper.find(".add-card")).toExist();
});
