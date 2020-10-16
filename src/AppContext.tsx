import UserItem from "entities/user-item";
import * as React from "react";

export interface AppContextState {
  userInfo: UserItem;
}

interface AppContextActions {
  setUseInfo: (data: UserItem) => void;
}

export interface AppContextInterface {
  state: AppContextState;
  actions: AppContextActions;
}

export const Context = React.createContext<AppContextInterface | null>(null);

export const AppContextConsumer = Context.Consumer;
