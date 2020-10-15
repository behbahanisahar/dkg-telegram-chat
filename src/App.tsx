import { AppContainer } from "features/container/container";
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "./App.scss";
import { Context } from "./AppContext";
import { AppContextProvider } from "./AppContextProvider";

export default class APP extends React.Component<{}> {
  public constructor(props: any) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <AppContextProvider>
        <Router>
          <AppContainer></AppContainer>
        </Router>
      </AppContextProvider>
    );
  }
}
APP.contextType = Context;
