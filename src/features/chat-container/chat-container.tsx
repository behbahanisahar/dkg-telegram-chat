import { DKCard, DKCardBody, DKCardHeader } from "core/components/card";
import ChatList from "features/chat-list/chat-list";
import ChatPage from "features/chat-page/chat-page";
import React, { ReactElement } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import "./chat-container.scss";
import ChatHeader from "./chat-header/chat-header";
interface Props {
  match: any;
}

export const ChatContainer = ({ match }: Props): ReactElement => {
  console.log(match.params.username);

  return (
    <div className="row">
      <DKCard gutter={true} fitBody={true} className="p-0 mx-auto col-8 ">
        <DKCardHeader className="text-white d-flex" hasComplexHeader={true}>
          <ChatHeader />
        </DKCardHeader>
        <DKCardBody>
          <div className="row ">
            <div className="col-4 pr-0">
              <InputGroup className="my-3 px-3 w-70">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
              </InputGroup>
              <div className="card-scroll h-500px pr-0">
                <ChatList />
              </div>
            </div>
            <div className="col-8 pl-0">
              <ChatPage selectedChatUsername={match.params.username} />
            </div>
          </div>
        </DKCardBody>
      </DKCard>
    </div>
  );
};
