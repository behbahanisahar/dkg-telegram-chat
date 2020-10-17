import { DKCard, DKCardBody, DKCardHeader } from "core/components/card";
import ChatList from "features/chat-list/chat-list";
import ChatPage from "features/chat-page/chat-page";
import ContactModal from "features/contacts/contact-modal";
import ProfileInfoModal from "features/profile-info/profile-info-modal";
import React, { ReactElement, useState } from "react";
import "./chat-container.scss";
import ChatHeader from "./chat-header/chat-header";
import SearchBox from "./search-box";

interface Props {
  match: any;
}

export const ChatContainer = ({ match }: Props): ReactElement => {
  const [searchTxt, setSearchTxt] = useState<string>("");
  const [selectedUsername, setSelectedUsername] = useState<string>("");
  return (
    <div className="row">
      <DKCard gutter={true} fitBody={true} className="p-0 mx-auto col-8 ">
        <DKCardHeader className="text-white d-flex" hasComplexHeader={true}>
          <ChatHeader username={match.params.username} />
        </DKCardHeader>
        <DKCardBody>
          <div className="row ">
            <div className="col-4 pr-0">
              <SearchBox onSearch={setSearchTxt} />
              <div className="card-scroll h-500px pr-0">
                <ChatList selectedUsername={selectedUsername} searchText={searchTxt} />
              </div>
            </div>
            <div className="col-8 pl-0">
              <ChatPage onSetSelectedChat={setSelectedUsername} selectedChatUsername={match.params.username} />
            </div>
          </div>
          <ProfileInfoModal />
          <ContactModal />
        </DKCardBody>
      </DKCard>
    </div>
  );
};
