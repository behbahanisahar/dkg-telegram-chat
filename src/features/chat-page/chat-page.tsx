import { Context } from "AppContext";
import DKAvatar from "core/components/avatar/avatar";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./chat-page.scss";
import AllChat from "./user-chat/all-chats";
import ChatItem from "./chat-item";
import Util from "../../utilities/utilities";
import UserItem from "entities/user-item";
import UserChat from "./user-chat/single-user-chat";

interface Props {
  selectedChatUsername: string;
  onSetSelectedChat: (username: string) => void;
}

const ChatPage = ({ selectedChatUsername, onSetSelectedChat }: Props): ReactElement => {
  const appContext = useContext(Context);
  const InitializedUserInfo: UserItem = {
    phoneNumber: "0",
    userName: "",
    title: "",
    id: 0,
    status: "",
    avatarURl: appContext?.state.userInfo.avatarURl,
    textPlaceHolder: "",
  };
  const userData = selectedChatUsername ? Util.getUserDetailChatList(selectedChatUsername)[0] : InitializedUserInfo; //this method returns  selected user info
  const [typedMsg, setTypedMsg] = useState<string>("");
  const [message, setMessage] = useState<ChatItem>();
  const [selectedChat, setSelectedChat] = useState<ChatItem>();
  useEffect(() => {
    onSetSelectedChat(userData.userName);
  }, [selectedChatUsername]);
  const onSendMessage = (): void => {
    if (typedMsg) {
      const Message: ChatItem = {
        sender: appContext?.state.userInfo || InitializedUserInfo,
        text: typedMsg,
        receiveTime: Util.formatAMPM(new Date()),
        repliedTo: selectedChat,
      };
      setSelectedChat(undefined);
      setMessage(Message);
      setTypedMsg("");
    }
  };
  return (
    <>
      {!selectedChatUsername && (
        <div className="text-muted no-content text-center">Please select a chat to start messaging</div>
      )}
      {selectedChatUsername && (
        <>
          <div className="card-scroll card-scroll-thick h-450px">
            <AllChat setSelectedChat={setSelectedChat} message={message} />
          </div>

          <div className="position-absolute bottom-0 w-100 my-2">
            {selectedChat && (
              <div className="w-50 d-flex justify-content-between m-auto">
                <UserChat isRepliedMessage={true} chat={selectedChat} />
                <i className="fa fa-times" onClick={() => setSelectedChat(undefined)} />
              </div>
            )}

            <div className="w-75 d-flex justify-content-center m-auto">
              <DKAvatar
                hasLink={false}
                onClickAvatar={() => appContext?.actions.onShowContactInfo(true, appContext.state.userInfo)}
                size={60}
                imageUrl={appContext?.state.userInfo.avatarURl}
                pictureTextPlaceholder={appContext?.state.userInfo.textPlaceHolder}
                type="circle"
                className="mr-4"
              />
              <div className="d-flex flex-column flex-grow-1">
                <Form.Control
                  id="messageBox"
                  type="text"
                  value={typedMsg}
                  placeholder="Write a message..."
                  onChange={e => setTypedMsg(e.target.value)}
                  onKeyPress={(e: any) => {
                    if (e.which === 13 /* Enter */) {
                      e.preventDefault();
                      onSendMessage();
                    }
                  }}
                />

                <div className="d-flex justify-content-end mt-2">
                  <a
                    className="font-weight-bolder cursor-pointer tg-primary font-size-md"
                    onClick={(e: any) => {
                      onSendMessage();
                    }}
                  >
                    SEND
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default ChatPage;
