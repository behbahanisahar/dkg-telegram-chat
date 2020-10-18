import DKAvatar from "core/components/avatar/avatar";
import { useService } from "hooks/useService";
import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChatListItem from "./chat-list-item";
import ChatListServices from "./chat-list-service/chat-list-service";
import "./chat-list-styles.scss";
interface Props {
  searchText: string;
  selectedUsername: string;
}

const ChatList = ({ searchText, selectedUsername }: Props): ReactElement => {
  console.log(selectedUsername);
  const allChats = useService<ChatListItem[]>(ChatListServices.getAllChatList());
  const [filteredChats, setFilteredChats] = useState<ChatListItem[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<number>(-1);
  const onSetSelectedChat = (userId: number) => {
    setSelectedChatId(userId);
  };
  useEffect(() => {
    if (allChats.status === "loaded") {
      const filteredChat = allChats.payload.filter(chats => {
        return (
          chats.user.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
          chats.user.userName.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
          chats.lastMessage.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        );
      });
      // filteredContact.filter(x => x.user.userName === selectedUsername)[0].newMessageCount === 0;
      setFilteredChats(filteredChat);
    }
  }, [searchText]);

  return (
    <div>
      <div className="position-relative">
        {filteredChats.length !== 0 && (
          <>
            <div className="">
              {filteredChats.map((cm: ChatListItem, index: number) => {
                return (
                  <Link
                    to={`/${cm.user.userName}`}
                    key={index}
                    className={
                      "d-flex   align-items-center justify-content-between px-2 py-1 " +
                      (selectedChatId === cm.user.id ? "active-chat" : "overlay")
                    }
                    onClick={() => {
                      onSetSelectedChat(cm.user.id);
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-circle symbol-50 mr-3">
                        <DKAvatar
                          className="mr-1"
                          imageUrl={cm.user.avatarURl}
                          pictureTextPlaceholder={cm.user.textPlaceHolder}
                          size={50}
                          type="circle"
                          hasLink={false}
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
