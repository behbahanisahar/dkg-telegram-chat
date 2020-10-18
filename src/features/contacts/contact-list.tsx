import { useService } from "hooks/useService";
import React, { ReactElement, useEffect, useState } from "react";
import "./contact.scss";
import UserItem from "entities/user-item";
import ContactListServices from "./contact-service/contact-service";
import Contact from "./contact";
interface Props {
  searchText: string;
  newContact?: UserItem;
}

const ContactList = ({ searchText, newContact }: Props): ReactElement => {
  const allContacts = useService<UserItem[]>(ContactListServices.getAllContacts());
  const [filteredContact, setFilteredContact] = useState<UserItem[]>([]);
  useEffect(() => {
    if (allContacts.status === "loaded") {
      const filteredContact = allContacts.payload.filter(contact => {
        return (
          contact.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
          contact.userName.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        );
      });
      setFilteredContact(filteredContact);
    }
  }, [searchText]);
  useEffect(() => {
    if (newContact) {
      setFilteredContact([...filteredContact, newContact]);
    }
  }, [newContact]);

  return (
    <>
      {filteredContact.length !== 0 && (
        <div className="card-scroll h-500px overflow-x-hidden mr-2 mx-auto ">
          {filteredContact.map((contact: UserItem, index: number) => {
            return <Contact contact={contact} />;
          })}
        </div>
      )}
    </>
  );
};
export default ContactList;
