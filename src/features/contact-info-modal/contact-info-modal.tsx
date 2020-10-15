import React, { ReactElement } from "react";

const ContactInfoModal = (): ReactElement => {
  return (
    <div className="d-flex flex-column">
      <div className="h-150px bg-bg-blue text-white d-flex p-3 font-weight-bold  align-items-start justify-content-between">
        <div className="d-flex align-items-center">Contact info</div>
        <div className="d-flex flex-column align-items-end">Edit</div>
      </div>
      <div className="align-self-stretch">test</div>
    </div>
  );
};
export default ContactInfoModal;
