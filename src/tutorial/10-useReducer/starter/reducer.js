import { CLEAR_LIST, REMOVE_ITEM, RESET } from "./actions";
import { data } from "../../../data";

export const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { people: [] };
  }
  if (action.type === RESET) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    let updatePeople = state.people.filter(
      (item) => item.id !== action.payload.id
    );
    return {
      ...state,
      people: updatePeople,
    };
  }
};