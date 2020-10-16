import UserItem from "entities/user-item";
import * as React from "react";
import { Component } from "react";
import { AppContextState, Context } from "./AppContext";

class AppContextProvider extends Component<{}, AppContextState> {
  state: AppContextState = {
    userInfo: {
      phoneNumber: "0",
      userName: "",
      title: "",
      id: 0,
      status: "",
    },
    showContactInfo: false,
  };

  setUseInfo = (data: UserItem): void => this.setState({ userInfo: data });
  onShowContactInfo = (data: boolean): void => this.setState({ showContactInfo: data });
  render(): JSX.Element {
    return (
      <Context.Provider
        value={{
          state: this.state,
          actions: {
            setUseInfo: this.setUseInfo,
            onShowContactInfo: this.onShowContactInfo,
          },
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export { AppContextProvider };
export const AppConsumer = Context.Consumer;
