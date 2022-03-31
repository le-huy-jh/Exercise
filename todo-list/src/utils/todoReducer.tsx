import {ADD_TODO, CHANGE_STATUS} from './todoActions'

export interface ITodoItem {
  text: string;
  id: number;
  done: boolean;
}

export interface IAction {
  type: string;
  payload?: ITodoItem | number;
}

const todoReducer = (state: ITodoItem[], action: IAction) => {
  switch (action.type) {
    case ADD_TODO:
      if (
        action.payload &&
        typeof action.payload !== "number" &&
        action.payload.text.trim() !== ""
      ) {
        return [...state, action.payload];
      }
    case CHANGE_STATUS:
      const oldState = [...state];
      if (action.payload && typeof action.payload === "number") {
        const index = oldState.findIndex((ele) => ele.id === action.payload);
        if (index !== -1) {
          oldState[index].done = !oldState[index].done;
        }
      }
      return oldState;
    default:
      return state;
  }
};

export default todoReducer
