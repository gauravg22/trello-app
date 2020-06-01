import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";

configure({ adapter: new Adapter() });

Object.defineProperty(global, "Node", {
  value: { firstElementChild: "firstElementChild" }
});
