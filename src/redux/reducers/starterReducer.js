import { types } from "../types/types";

const initialState = {
    activeStarter: 'Fuego'
};

export const starterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setActiveStarter:
      return { 
        ...state, 
        activeStarter: action.payload 
    };

    default:
      return state;
  }
};
