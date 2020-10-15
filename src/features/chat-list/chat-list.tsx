import DKAvatar from "core/components/avatar/avatar";
import { useService } from "hooks/useService";
import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import ChatItem from "./chat-item";
import ChatListServices from "./chat-list-service/chat-list-service";
import "./chat-list-styles.scss";

const ChatList = (): ReactElement => {
  const allChats = useService<ChatItem[]>(ChatListServices.getAllChats());
  const [selectedChatId, setSelectedChatId] = useState<number>(-1);
  const onSetSelectedChat = (userId: number) => {
    setSelectedChatId(userId);
  };

  return (
    <div>
      <div className="position-relative">
        {allChats.status === "loaded" && (
          <>
            <div className="">
              {allChats.payload.map((cm: ChatItem, index: number) => {
                return (
                  <Link
                    to={`/${cm.user.userName}`}
                    key={index}
                    className={
                      "d-flex   align-items-center justify-content-between px-2 py-1 " +
                      (selectedChatId === cm.user.id ? "active-chat" : "overlay")
                    }
                    onClick={() => onSetSelectedChat(cm.user.id)}
                  >
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-circle symbol-50 mr-3">
                        <DKAvatar
                          className="mr-3"
                          imageUrl={cm.user.avatarURl}
                          pictureTextPlaceholder={cm.user.textPlaceHolder}
                          size={50}
                          type="circle"
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span
                          className={
                            "text-hover-primary font-weight-bold font-size-lg " +
                            (selectedChatId === cm.user.id ? "text-white" : "text-dark-75")
                          }
                        >
                          {cm.user.title}
                        </span>
                        <span className="text-muted form-text  font-size-xs">{cm.lastMessage}</span>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <span className="text-muted font-weight-bold font-size-sm"> {cm.lastMessageTime}</span>
                      {cm.newMessageCount && (
                        <span className="label label-sm label-dark text-white font-weight-bold">
                          {cm.newMessageCount}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default ChatList;
