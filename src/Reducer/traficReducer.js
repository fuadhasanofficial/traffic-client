/* eslint-disable no-unreachable */
const initialState = {
  english: false,
  carData: {},
  mode: "",
};

const trafiicReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LANG":
      return {
        ...state,
        english: !state.english,
      };
      break;
    case "AUTO_SERCH":
      return {
        ...state,
        searchData: action.payload,
      };
      break;

    case "CHANGE_MODE":
      return { ...state, mode: action.payload };

      break;

    default:
      return state;
  }
};

export { initialState, trafiicReducer };
