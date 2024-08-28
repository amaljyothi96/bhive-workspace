export type Feature = {
  id: number;
  feature: string;
  icon: any;
};

export type ReduxAction = {
  type: string;
  payload: any;
};

export type ListState = { workspaceList: Array<any> | null };

export type RootState = {
  listReducer: ListState;
};

export type WorkspaceCardData = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  image: string;
  day_pass_price: number;
};
