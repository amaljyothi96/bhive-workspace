import { ReduxAction } from "../../types";
import Types from "../types";

export const getWorkspaceList: any = () => {
  return async (dispatch: (action: ReduxAction) => void) => {
    fetch(
      "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: Types.WORKSPACE_LIST,
          payload: data,
        });
      });
  };
};
