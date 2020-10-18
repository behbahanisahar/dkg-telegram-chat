import { Context } from "AppContext";
import SimpleModal from "core/components/modal/simple-modal";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import NewContactForm from "./new-contact-form";
import UserItem from "entities/user-item";
interface Props {
  onAddContact: (newContact: UserItem) => void;
}

const NewContactModal = ({ onAddContact }: Props): ReactElement => {
  const appContext = useContext(Context);
  const [newContact, setNewContact] = useState<UserItem>();
  useEffect(() => {
    newContact && onAddContact(newContact);
  }, [newContact]);

  return (
    <SimpleModal
      className="overflow-hidden p-0"
      modalMaxWidth="xs"
      open={appContext?.state.showNewContactPage || false}
      height="50vh"
      onClose={() => {
        appContext?.actions.onShowNewContactPage(false);
      }}
    >
      <NewContactForm onAddContact={setNewContact} />
    </SimpleModal>
  );
};
export default NewContactModal;
