import { Context } from "AppContext";
import DKAvatar from "core/components/avatar/avatar";
import React, { ReactElement, useContext } from "react";
import Util from "../../../utilities/utilities";
import "./card-header.scss";
import MenuListComposition from "./toggle-menu";

interface Props {
  username?: string;
}

const ChatHeader = ({ username }: Props): ReactElement => {
  const appContext = useContext(Context);
  const userData = username ? Util.getUserDetailChatList(username || "")[0] : null;

  return (
    <>
      <div className="col-4 d-flex align-items-center">
        {/* <i
          className="fa fa-ellipsis-v icon-md mr-5 cursor-pointer"
          onClick={() => appContext?.actions.onShowContactsPage(true)}
        /> */}
        <MenuListComposition />
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
          <DKAvatar
            size={40}
            onClickAvatar={() => appContext?.actions.onShowContactInfo(true, userData)}
            imageUrl={userData?.avatarURl}
            pictureTextPlaceholder={userData?.textPlaceHolder}
            type="circle"
            className="mr-4"
          />
          {userData.title}
          <span className="status-header ml-2">
            {userData.type === "Group" ? userData?.groupMember?.length + " members" : userData.status}
          </span>
        </div>
      )}
    </>
  );
};
export default ChatHeader;
