import { Context } from "AppContext";
import React, { ReactElement, useContext } from "react";
import Util from "../../../utilities/utilities";
import "./card-header.scss";

interface Props {
  username?: string;
}

const ChatHeader = ({ username }: Props): ReactElement => {
  const appContext = useContext(Context);
  const userData = username ? Util.getUserDetailChatList(username || "")[0].user : null;

  return (
    <>
      <div className="col-4 d-flex align-items-center">Telegram</div>
      {userData && (
        <div
          className="col-8 d-flex align-items-center"
          onClick={(e: any) => {
            e.preventDefault();
            appContext?.actions.onShowContactInfo(true, userData);
          }}
        >
          {userData.title}
        </div>
      )}
    </>
  );
};
export default ChatHeader;
