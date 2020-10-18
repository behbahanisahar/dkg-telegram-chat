import { Context } from "AppContext";
import SimpleModal from "core/components/modal/simple-modal";
import ContactInfoModal from "features/contact-info-modal/contact-info-modal";
import React, { ReactElement, useContext } from "react";

const ProfileInfoModal = (): ReactElement => {
  const appContext = useContext(Context);
  console.log(appContext?.state.showContactInfo);
  return (
    <SimpleModal
      modalMaxWidth="xs"
      open={appContext?.state.showContactInfo || false}
      height={appContext?.state.selectedUser.type === "Group" ? "110vh" : "65vh"}
      onClose={() => {
        appContext?.actions.onShowContactInfo(false);
      }}
    >
      <ContactInfoModal />
    </SimpleModal>
  );
};
export default ProfileInfoModal;
