import { Context } from "AppContext";
import DKAvatar from "core/components/avatar/avatar";
import React, { ReactElement, useContext } from "react";
import { Form } from "react-bootstrap";
import "./chat-page.scss";
import AllChat from "./user-chat/all-chats";

interface Props {
  selectedChatUsername: number;
  match?: any;
}

const ChatPage = ({ selectedChatUsername, match }: Props): ReactElement => {
  const appContext = useContext(Context);
  return (
    <>
      {!selectedChatUsername && (
        <div className="text-muted no-content text-center">Please select a chat to start messaging</div>
      )}
      {selectedChatUsername && (
        <>
          <div className="card-scroll card-scroll-thick">
            <AllChat />
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
                <Form.Control type="text" placeholder="Write a message..." />

                <div className="d-flex justify-content-end mt-2">
                  <a className="font-weight-bolder cursor-pointer tg-primary font-size-md">SEND</a>
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
