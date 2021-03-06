import React, { ReactElement, useState } from "react";
import ContactsHeader from "./contacts-header";
import "./contact.scss";
import { FormControl } from "react-bootstrap";
import ContactList from "./contact-list";
import UserItem from "entities/user-item";
interface Props {
  newContact?: UserItem;
}

const Contacts = ({ newContact }: Props): ReactElement => {
  const [searchTxt, setSearchTxt] = useState<string>("");
  return (
    <div>
      <ContactsHeader />
      <FormControl
        placeholder="Search..."
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={searchTxt}
        onChange={event => {
          setSearchTxt(event.target.value);
        }}
        className="py-4"
      />

      <ContactList newContact={newContact} searchText={searchTxt} />
    </div>
  );
};
export default Contacts;
