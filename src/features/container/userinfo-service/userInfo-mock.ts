import UserItem from "entities/user-item";
import img from "../../../assets/img/sahar.jpg";
export default class UserMockData {
  public static user: UserItem = {
    id: 1001,
    title: "sahar",
    phoneNumber: "09129619007",
    status: "last seen recently",
    avatarURl: img,
    textPlaceHolder: "SB",
    type: "User",
    userName: "@OoshoO",
  };
}
