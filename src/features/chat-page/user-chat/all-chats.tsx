import { useService } from "hooks/useService";
import React, { ReactElement } from "react";
import ChatItem from "../chat-item";
import ChatServices from "../chat-page-service/chat-page-service";
import UserChat from "./single-user-chat";
interface Props {
  match?: any;
}

const AllChat = ({ match }: Props): ReactElement => {
  const username = match?.params.username;
  const allChats = useService<ChatItem[]>(ChatServices.getAllChats(username));
  return (
    <>
      {allChats.status === "loaded" && (
        <div className="mr-2 h-450px w-75 mx-auto ">
          {allChats.payload.map((chat: ChatItem, index: number) => {
            return <UserChat chat={chat} />;
          })}
        </div>
      )}
    </>
  );
};
export default AllChat;
