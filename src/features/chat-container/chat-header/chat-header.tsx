import SimpleModal from "core/components/modal/simple-modal";
import ContactInfoModal from "features/contact-info-modal/contact-info-modal";
import React, { ReactElement, useState } from "react";
import "./card-header.scss";

const ChatHeader = (): ReactElement => {
  const [showContactInfo, onShowContactInfo] = useState<boolean>(false);
  const cancelForm = () => {
    onShowContactInfo(false);
  };
  return (
    <>
      <div className="col-4 d-flex align-items-center">Telegram</div>
      <div
        className="col-8 d-flex align-items-center"
        onClick={(e: any) => {
          onShowContactInfo(true);
        }}
      >
        sahar
      </div>
      <SimpleModal modalMaxWidth="xs" open={showContactInfo} height="40vh" onClose={cancelForm}>
        <ContactInfoModal />
      </SimpleModal>
    </>
  );
};
export default ChatHeader;
