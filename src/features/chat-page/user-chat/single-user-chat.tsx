import DKAvatar from "core/components/avatar/avatar";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import ChatItem from "../chat-item";
import "./../chat-page.scss";
interface Props {
  chat: ChatItem;
  isRepliedMessage?: boolean;
}

const UserChat = ({ chat, isRepliedMessage }: Props): ReactElement => {
  return (
    <div className={"d-flex  justify-content-between p-3 "}>
      <div className="d-flex align-items-start">
        {!isRepliedMessage && (
          <DKAvatar
            className="mr-2"
            imageUrl={chat.sender.avatarURl}
            pictureTextPlaceholder={chat.sender.textPlaceHolder}
            size={45}
            type="circle"
          />
        )}
        <div className={isRepliedMessage ? "d-flex flex-column" : "d-flex flex-column"}>
          <Link to={`/${chat.sender.userName}`} className="tg-primary">
            <span className={"font-weight-bold font-size-lg tg-user-text-color "}>{chat.sender.title}</span>
          </Link>
          {chat.repliedTo && <UserChat chat={chat.repliedTo} isRepliedMessage={true} />}
          <span
            className={isRepliedMessage ? "font-size-md  text-truncate d-inline-block " : "font-size-md message-text"}
            style={isRepliedMessage ? { maxWidth: "350px" } : { maxWidth: "" }}
          >
            {chat.text}
          </span>
        </div>
      </div>
      {!isRepliedMessage && (
        <div className="d-flex flex-column align-items-end w-xl-75 w-75">
          <span className={"font-weight-bold font-size-sm text-muted"}>{chat.receiveTime}</span>
        </div>
      )}
    </div>
  );
};
export default UserChat;