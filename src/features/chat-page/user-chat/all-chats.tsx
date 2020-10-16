import { useService } from "hooks/useService";
import React, { ReactElement, useEffect } from "react";
import { useState } from "react";
import ChatItem from "../chat-item";
import ChatServices from "../chat-page-service/chat-page-service";
import UserChat from "./single-user-chat";
interface Props {
  match?: any;
  message?: ChatItem;
}

const AllChat = ({ match, message }: Props): ReactElement => {
  const username = match?.params.username;
  const [allMessages, setAllMessages] = useState<ChatItem[]>([]);
  const allChats = useService<ChatItem[]>(ChatServices.getAllChats(username));

  useEffect(() => {
    let chats: ChatItem[];
    if (allChats.status === "loaded") {
      setAllMessages(allChats.payload);
      chats = [...allChats.payload];
      message && chats.push(message);
      setAllMessages(chats);
    }
  }, [message, allChats.status]);

  return (
    <>
      {allMessages.length !== 0 && (
        <div className="mr-2 h-450px w-75 mx-auto ">
          {allMessages.map((chat: ChatItem, index: number) => {
            return <UserChat chat={chat} />;
          })}
        </div>
      )}
    </>
  );
};
export default AllChat;
