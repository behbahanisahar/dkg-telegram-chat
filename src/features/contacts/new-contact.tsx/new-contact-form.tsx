import { TextField } from "@material-ui/core";
import { Context } from "AppContext";
import UserItem from "entities/user-item";
import React, { ReactElement, useContext, useState } from "react";
import { Button } from "react-bootstrap";
import "./new-contact-form.scss";
interface Props {
  onAddContact: (newContact: UserItem) => void;
}

const NewContactForm = ({ onAddContact }: Props): ReactElement => {
  const appContext = useContext(Context);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const onSubmitform = () => {
    const newContact: UserItem = {
      phoneNumber: phoneNumber,
      userName: "",
      title: firstName + " " + lastName,
      id: 10000,
      status: "Last Seen Recently",
      type: "User",
      textPlaceHolder: firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase(),
    };
    onAddContact(newContact);
    appContext?.actions.onShowNewContactPage(false);
  };
  return (
    <div className="p-5">
      <div className="font-size-lg mb-5 font-weight-bold">Add New Contact</div>

      <TextField
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
        className="w-100 d-block mb-3"
        id="standard-basic"
        type="number"
        label="Phone number"
      />

      <TextField
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        className="w-100 d-block mb-3"
        id="standard-basic"
        label="First name"
      />

      <TextField
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        className="w-100 d-block mb-3"
        id="standard-basic"
        label="Last name"
      />
      <div className="d-flex float-right  align-items-end flex-row">
        <Button
          onClick={() => appContext?.actions.onShowNewContactPage(false)}
          className="tg-primary font-weight-bold"
          variant="link"
        >
          CANCEL
        </Button>
        <Button onClick={onSubmitform} className="tg-primary font-weight-bold" variant="link">
          SAVE
        </Button>
      </div>
    </div>
  );
};
export default NewContactForm;
