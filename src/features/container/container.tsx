import { AppContextConsumer } from "AppContext";
import React, { ReactElement, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "routes";
import "./container.css";

export const AppContainer = (): ReactElement => {
  useEffect(() => {
    document.title = process.env.REACT_APP_APP_NAME || "Digikala - Telegram";
  }, []);

  return (
    <AppContextConsumer>
      {appContext => (
        <>
          <Switch>
            {routes.map(r => (
              <Route {...r} key={r.path}></Route>
            ))}
          </Switch>
        </>
      )}
    </AppContextConsumer>
  );
};
