import { Context } from "AppContext";
import SimpleModal from "core/components/modal/simple-modal";
import React, { ReactElement, useContext } from "react";
import Contacts from "./contacts";

const ContactModal = (): ReactElement => {
  const appContext = useContext(Context);

  return (
    <SimpleModal
      className="overflow-hidden"
      modalMaxWidth="xs"
      open={appContext?.state.showContactPage || false}
      height="90vh"
      onClose={() => {
        appContext?.actions.onShowContactInfo(false);
      }}
    >
      <Contacts />
      <div className="text-transform modal-footer justify-content-center text-center tg-primary font-weight-bold">
        New Contact
      </div>
    </SimpleModal>
  );
};
export default ContactModal;
