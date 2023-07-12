import { legacy_createStore as createStore } from "redux";

const initialValue = {
  value: 0,
};

const appreducer = (prevState = initialValue, action) => {
  switch (action.type) {
    case "incriment":
      return {
        ...prevState,
        value: prevState.value + 1,
      };
    case "decriment":
      return {
        ...prevState,
        value: prevState.value - 1,
      };

    default:
      return prevState;
  }
};

const store = createStore(appreducer);

export default store;
