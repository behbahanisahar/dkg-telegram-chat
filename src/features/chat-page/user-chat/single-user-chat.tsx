import { Context } from "AppContext";
import DKAvatar from "core/components/avatar/avatar";
import React, { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";
import ChatItem from "../chat-item";
import "./../chat-page.scss";

interface Props {
  chat?: ChatItem;
  isRepliedMessage?: boolean;
  onChatSelected?: (chat: ChatItem) => void;
}

const UserChat = ({ chat, isRepliedMessage, onChatSelected }: Props): ReactElement => {
  const appContext = useContext(Context);
  return (
    <div className={"d-flex  justify-content-between p-3 "}>
      <div className="d-flex align-items-start w-100">
        {!isRepliedMessage && (
          <DKAvatar
            className="mr-2"
            userName={chat?.sender.userName}
            imageUrl={chat?.sender.avatarURl}
            pictureTextPlaceholder={chat?.sender.textPlaceHolder}
            size={45}
            type="circle"
            onClickAvatar={() => appContext?.actions.onShowContactInfo(true, chat?.sender)}
            status={chat?.sender.status}
          />
        )}
        {isRepliedMessage && <span className="bullet bullet-bar bg-info align-self-stretch mr-2"></span>}
        <div className={isRepliedMessage ? "d-flex flex-column w-100" : "d-flex flex-column w-100"}>
          <div className="d-flex justify-content-between">
            <Link
              onClick={() => appContext?.actions.onShowContactInfo(true, chat?.sender)}
              to={`/${chat?.sender.userName}`}
              className="tg-primary align-self-start"
            >
              <span className={"font-weight-bold font-size-lg tg-user-text-color "}>{chat?.sender.title}</span>
            </Link>
            {!isRepliedMessage && (
              <span className={"font-weight-bold font-size-sm text-muted align-self-end"}>{chat?.receiveTime}</span>
            )}
          </div>
          {chat?.repliedTo && <UserChat chat={chat?.repliedTo} isRepliedMessage={true} />}
          <div className="d-flex justify-content-between">
            <span
              className={
                isRepliedMessage
                  ? "font-size-md text-truncate-max-w text-truncate d-inline-block align-self-start"
                  : "font-size-md message-text ml-4"
              }
            >
              {chat?.text}
            </span>
            {!isRepliedMessage && (
              <div className="d-flex flex-column align-items-end receive-time align-self-start">
                <span
                  className={"font-weight-bold font-size-sm tg-primary d-block cursor-pointer"}
                  onClick={() => {
                    if (chat && onChatSelected) {
                      const selectedChat: ChatItem = {
                        ...chat,
                        repliedTo: undefined,
                      };
                      onChatSelected(selectedChat);
                      var messageBox: any = document.getElementById("messageBox") || []; //change focus to message box
                      messageBox && messageBox.focus();
                    }
                  }}
                >
                  <i className="fa fa-reply tg-primary icon-md" />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserChat;
