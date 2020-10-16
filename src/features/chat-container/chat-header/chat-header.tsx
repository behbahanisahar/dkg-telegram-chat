import { Context } from "AppContext";
import React, { ReactElement, useContext } from "react";
import "./card-header.scss";

const ChatHeader = (): ReactElement => {
  const appContext = useContext(Context);
  return (
    <>
      <div className="col-4 d-flex align-items-center">Telegram</div>
      <div
        className="col-8 d-flex align-items-center"
        onClick={(e: any) => {
          e.preventDefault();
          appContext?.actions.onShowContactInfo(true);
        }}
      >
        sahar
      </div>
    </>
  );
};
export default ChatHeader;
