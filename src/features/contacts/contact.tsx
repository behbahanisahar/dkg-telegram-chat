import { Context } from "AppContext";
import DKAvatar from "core/components/avatar/avatar";
import UserItem from "entities/user-item";
import React, { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";

interface Props {
  contact: UserItem;
}

const Contact = ({ contact }: Props): ReactElement => {
  const appContext = useContext(Context);
  return (
    <Link
      to={`/${contact.userName}`}
      onClick={() => appContext?.actions.onShowContactsPage(false)}
      className={"d-flex  justify-content-between p-3 "}
    >
      <div className="d-flex align-items-start">
        <DKAvatar
          className="mr-2"
          userName={contact.userName}
          imageUrl={contact.avatarURl}
          pictureTextPlaceholder={contact.textPlaceHolder}
          size={45}
          type="circle"
        />

        <div className={"d-flex flex-column"}>
          <div className="tg-primary">
            <span className={"font-weight-bold font-size-lg tg-user-text-color "}>{contact.title}</span>
            <span className="d-block text-muted font-size-sm">{contact.status}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Contact;
