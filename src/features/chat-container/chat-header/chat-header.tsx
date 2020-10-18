import { Context } from "AppContext";
import React, { ReactElement, useContext } from "react";
import Util from "../../../utilities/utilities";
import "./card-header.scss";

interface Props {
  username?: string;
}

const ChatHeader = ({ username }: Props): ReactElement => {
  const appContext = useContext(Context);
  const userData = username ? Util.getUserDetailChatList(username || "")[0] : null;

  return (
    <>
      <div className="col-4 d-flex align-items-center">
        <i
          className="fa fa-ellipsis-v icon-md mr-5 cursor-pointer"
          onClick={() => appContext?.actions.onShowContactsPage(true)}
        />
        Telegram
      </div>
      {userData && (
        <div
          className="col-8 d-flex align-items-center"
          onClick={(e: any) => {
            e.preventDefault();
            appContext?.actions.onShowContactInfo(true, userData);
          }}
        >
          {userData.title}
          <span className="status-header ml-2">{userData.status}</span>
        </div>
      )}
    </>
  );
};
export default ChatHeader;
