import UserItem from "entities/user-item";
import Contact from "features/contacts/contact";
import React, { ReactElement } from "react";
interface Props {
  contact?: UserItem[];
}

const GroupMember = ({ contact }: Props): ReactElement => {
  return (
    <div>
      {contact &&
        contact.map((contact: UserItem, index: number) => {
          return <Contact contact={contact} />;
        })}
    </div>
  );
};
export default GroupMember;
