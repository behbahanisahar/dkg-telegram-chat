import React, { ReactElement } from "react";
import { Button } from "react-bootstrap";
import "./chat-page.scss";
interface Props {
  selectedChatUsername: number;
  match?: any;
}

const ChatPage = ({ selectedChatUsername, match }: Props): ReactElement => {
  return (
    <>
      {!selectedChatUsername && (
        <div className="text-muted no-content text-center">Please select a chat to start messaging</div>
      )}
      {selectedChatUsername && (
        <div className="d-flex  flex-column  h-550px">
          <div className="p-2 bd-highlight h-100 card-scroll">Flex item</div>

          <div className="mt-auto ">
            <textarea
              rows={3}
              className="form-control border-0  border-bottom p-0"
              placeholder="write a message..."
            ></textarea>
            <hr className="bg-primary" />
            <div className="d-flex align-items-center justify-content-between mt-5">
              <div></div>
              <Button className="float-right " variant="link">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ChatPage;
