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
    showContactPage: false,
    showNewContactPage: false,
    selectedUser: { phoneNumber: "0", userName: "", title: "", id: 0, status: "" },
  };

  setUseInfo = (data: UserItem): void => this.setState({ userInfo: data });
  onShowContactsPage = (data: boolean): void => this.setState({ showContactPage: data });
  onShowNewContactPage = (data: boolean): void => this.setState({ showNewContactPage: data });
  onShowContactInfo = (data: boolean, user?: UserItem): void => {
    this.setState(prevState => {
      return {
        ...prevState,
        selectedUser: user || prevState.selectedUser,
        showContactInfo: data,
      };
    });
  };
  render(): JSX.Element {
    return (
      <Context.Provider
        value={{
          state: this.state,
          actions: {
            setUseInfo: this.setUseInfo,
            onShowContactInfo: this.onShowContactInfo,
            onShowContactsPage: this.onShowContactsPage,
            onShowNewContactPage: this.onShowNewContactPage,
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
