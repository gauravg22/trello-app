import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import store from "../../store";
import { Provider } from "react-redux";

it("trello app should render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
