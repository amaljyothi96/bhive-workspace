import { ListState, ReduxAction } from "../../types";
import ReduxTypes from "../types";

const initialState: ListState = {
  workspaceList: null,
};

export default (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case ReduxTypes.WORKSPACE_LIST:
      return {
        ...state,
        workspaceList: action.payload,
      };
    default:
      return state;
  }
};
