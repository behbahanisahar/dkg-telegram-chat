import React, { ReactElement } from "react";
import DKAvatar from "core/components/avatar/avatar";
import UserItem from "./../../entities/user-item";

interface Props {
  userData?: UserItem;
}

const ContactInfoHeader = ({ userData }: Props): ReactElement => {
  return (
    <>
      <div className="h-40px bg-bg-blue text-white d-flex p-3 font-weight-bold  align-items-start justify-content-between">
        <div className="d-flex align-items-center">Contact info</div>
        <div className="d-flex flex-column align-items-end">Close</div>
      </div>
      <div className="h-110px bg-bg-blue text-white d-flex p-3 font-weight-bold  align-items-start justify-content-between">
        <div className="d-flex align-items-center">
          <DKAvatar
            size={70}
            imageUrl={userData?.avatarURl}
            pictureTextPlaceholder={userData?.textPlaceHolder}
            type="circle"
          ></DKAvatar>
          <span className="ml-3 mb-4 font-weight-bold font-size-lg">{userData?.title}</span>
        </div>
      </div>
    </>
  );
};
export default ContactInfoHeader;
