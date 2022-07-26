import MENU_DATA from "../../data/menu.data";

const INITIAL_STATE = {
  sections: MENU_DATA,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
