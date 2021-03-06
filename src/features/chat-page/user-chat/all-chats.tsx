import { useService } from "hooks/useService";
import React, { ReactElement, useEffect } from "react";
import { useState } from "react";
import ChatItem from "../chat-item";
import ChatServices from "../chat-page-service/chat-page-service";
import UserChat from "./single-user-chat";
interface Props {
  match?: any;
  message?: ChatItem;
  setSelectedChat: (message: ChatItem) => void;
}

const AllChat = ({ match, message, setSelectedChat }: Props): ReactElement => {
  const username = match?.params.username;
  const [allMessages, setAllMessages] = useState<ChatItem[]>([]);
  const allChats = useService<ChatItem[]>(ChatServices.getAllChats(username));
  let messagesEnd: any;
  const scrollToBottom = (): void => {
    messagesEnd.scrollIntoView({ behavior: "smooth" }); //function for scroll down to page
  };
  useEffect(() => {
    if (allChats.status === "loaded") {
      setAllMessages(allChats.payload);
    }
  }, [allChats.status]);
  useEffect(() => {
    if (message) {
      setAllMessages([...allMessages, message]); //form push new message to others
    }
  }, [message]);
  useEffect(() => {
    scrollToBottom();
  }, [allMessages]);

  return (
    <>
      {allChats.status === "loaded" && (
        <div className="mr-2  w-75 mx-auto ">
          {allMessages.map((chat: ChatItem, index: number) => {
            return <UserChat onChatSelected={setSelectedChat} chat={chat} />;
          })}

          <div
            style={{ float: "left", clear: "both" }}
            ref={el => {
              messagesEnd = el;
            }}
          ></div>
        </div>
      )}
    </>
  );
};
export default AllChat;
