import { Context } from "AppContext";
import React, { ReactElement, useContext } from "react";
import UserItem from "./../../entities/user-item";

interface Props {
  userData?: UserItem;
}

const ContactsHeader = ({ userData }: Props): ReactElement => {
  const appContext = useContext(Context);
  return (
    <>
      <div className="h-50px position-fix bg-bg-blue text-white d-flex p-3 font-weight-bold  align-items-start justify-content-between">
        <div className="d-flex align-items-center">Contacts</div>
        <div
          className="d-flex flex-column align-items-end cursor-pointer"
          onClick={() => appContext?.actions.onShowContactsPage(false)}
        >
          Close
        </div>
      </div>
    </>
  );
};
export default ContactsHeader;
