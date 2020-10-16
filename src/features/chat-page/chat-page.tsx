import { Context } from "AppContext";
import DKAvatar from "core/components/avatar/avatar";
import React, { ReactElement, useContext, useState } from "react";
import { Form } from "react-bootstrap";
import "./chat-page.scss";
import AllChat from "./user-chat/all-chats";
import ChatItem from "./chat-item";

interface Props {
  selectedChatUsername: number;
  match?: any;
}

const ChatPage = ({ selectedChatUsername, match }: Props): ReactElement => {
  const appContext = useContext(Context);
  const InitializedUserInfo = {
    phoneNumber: "0",
    userName: "",
    title: "",
    id: 0,
    status: "",
  };
  const [typedMsg, setTypedMsg] = useState<string>("");
  const [message, setMessage] = useState<ChatItem>({
    sender: appContext?.state.userInfo || InitializedUserInfo,
    text: "",
    receiveTime: "",
  });

  const onSendMessage = (): void => {
    const Message: ChatItem = {
      sender: appContext?.state.userInfo || InitializedUserInfo,
      text: typedMsg,
      receiveTime: "now",
    };
    setMessage(Message);
    setTypedMsg("");
  };
  return (
    <>
      {!selectedChatUsername && (
        <div className="text-muted no-content text-center">Please select a chat to start messaging</div>
      )}
      {selectedChatUsername && (
        <>
          <div className="card-scroll card-scroll-thick">
            <AllChat message={message} />
          </div>

          <div className="position-absolute bottom-0 w-100 my-2">
            <div className="w-75 d-flex justify-content-center m-auto">
              <DKAvatar
                hasLink={false}
                size={60}
                imageUrl={appContext?.state.userInfo.avatarURl}
                pictureTextPlaceholder={appContext?.state.userInfo.textPlaceHolder}
                type="circle"
                className="mr-4"
              />
              <div className="d-flex flex-column flex-grow-1">
                <Form.Control
                  type="text"
                  value={typedMsg}
                  placeholder="Write a message..."
                  onChange={e => setTypedMsg(e.target.value)}
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
              <DKAvatar size={60} pictureTextPlaceholder="SH" type="circle" className="ml-4" />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default ChatPage;
