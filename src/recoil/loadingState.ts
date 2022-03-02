import { atom } from "recoil";

const loadingState = atom({
  key: "loadingState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default loadingState;
