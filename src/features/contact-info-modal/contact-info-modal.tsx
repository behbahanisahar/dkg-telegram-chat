import { Context } from "AppContext";
import React, { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";
import ContactInfoHeader from "./contact-info-header";
import "./contact-info.scss";
import GroupMember from "./group-member";

const ContactInfoModal = (): ReactElement => {
  const appContext = useContext(Context);

  return (
    <div className="d-flex flex-column">
      <ContactInfoHeader userData={appContext?.state.selectedUser} />

      <div className=" mx-10 row   ml-auto mt-n4">
        <Link
          onClick={() => appContext?.actions.onShowContactInfo(false)}
          to={`/${appContext?.state.selectedUser.userName}`}
          className="symbol symbol-circle symbol-60 "
        >
          <span className="symbol-label font-weight-bold cursor-pointer">
            <i className="fa fa-comment-dots icon-2x" />
          </span>
        </Link>
      </div>
      <div className="bg-grey">
        <div className="my-3 mx-10 row  p-2">
          {appContext?.state.selectedUser.type === "Group" && (
            <>
              <div className="col-2 d-inline">
                <i className="fa fa-info-circle icon-xl ml-n2" />
              </div>
              <div className="col-10 d-inline border-bottom pb-3">
                <div className="font-size-lg"> {appContext?.state.selectedUser.bio}</div>
              </div>
            </>
          )}
          {appContext?.state.selectedUser.type === "User" && (
            <>
              <div className="col-2 d-inline">
                <i className="fa fa-phone icon-xl mr-5" />
              </div>
              <div className="col-10 d-inline border-bottom pb-3">
                <div className="font-size-lg"> {appContext?.state.selectedUser.phoneNumber}</div>
                <div className="text-muted font-size-xs font-weight-light">phone</div>
              </div>
            </>
          )}
        </div>

        <div className="my-3 mx-10 row ">
          <div className="col-2 d-inline">
            <i className="fa fa-bell icon-xl mr-5" />
          </div>
          <div className="col-10 d-inline border-bottom pb-3">
            <div className="font-size-lg d-inline"> Notifications</div>
            <i className="fa fa-toggle-on float-right" />
          </div>
        </div>

        <div className="my-3 mx-10 row ">
          <div className="col-2 d-inline">
            <i className="fa fa-bars icon-xl mr-5" />
          </div>
          <div className="col-10 d-inline border-bottom pb-3">
            <div className="font-size-lg"> Share Contact</div>
          </div>
        </div>
        <div className="my-3 mx-10 row ">
          {" "}
          <div className="col-2 d-inline"></div>
          <div className="col-10 d-inline  pb-3">
            <div className="font-size-lg"> More...</div>
          </div>
        </div>
      </div>
      {appContext?.state.selectedUser.type === "Group" && (
        <>
          <div className="bg-gray p-2"></div>
          <div className=" mx-25">
            <GroupMember contact={appContext?.state.selectedUser.groupMember} />
          </div>
        </>
      )}
    </div>
  );
};
export default ContactInfoModal;
