import { AppContextConsumer, Context } from "AppContext";
import UserItem from "entities/user-item";
import { useService } from "hooks/useService";
import React, { ReactElement, useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "routes";
import "./container.css";
import UserServices from "./userinfo-service/userinfo-service";

export const AppContainer = (): ReactElement => {
  const appContext = useContext(Context);
  const userInfo = useService<UserItem>(UserServices.getUser());
  useEffect(() => {
    if (userInfo.status === "loaded") {
      appContext?.actions.setUseInfo(userInfo.payload);
    }
  }, [userInfo]);
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
