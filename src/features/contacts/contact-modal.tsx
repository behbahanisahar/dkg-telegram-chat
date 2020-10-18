import { Context } from "AppContext";
import SimpleModal from "core/components/modal/simple-modal";
import UserItem from "entities/user-item";
import React, { ReactElement, useContext, useState } from "react";
import Contacts from "./contacts";
import NewContactModal from "./new-contact.tsx/new-contact-modal";

const ContactModal = (): ReactElement => {
  const appContext = useContext(Context);
  const [newContact, setNewContact] = useState<UserItem>();

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
      <Contacts newContact={newContact} />
      <NewContactModal onAddContact={setNewContact} />
      <div
        className="text-transform modal-footer justify-content-center text-center tg-primary font-weight-bold"
        onClick={() => appContext?.actions.onShowNewContactPage(true)}
      >
        New Contact
      </div>
    </SimpleModal>
  );
};
export default ContactModal;
