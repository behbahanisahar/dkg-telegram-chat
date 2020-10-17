import user1 from "../../../assets/img/img1.png";
import user2 from "../../../assets/img/img2.png";
import user3 from "../../../assets/img/img3.png";
import UserItem from "entities/user-item";
import groupIcon from "../../../assets/img/gpIcon.png";

export default class ContactsMockData {
  public static contacts: UserItem[] = [
    {
      id: 1001,
      title: "sahar joon",
      phoneNumber: "09120286220",
      status: "last seen recently",
      avatarURl: user2,
      textPlaceHolder: "SB",
      type: "User",
      userName: "sahar khanum",
    },
    {
      id: 1002,
      title: "aghaye behmanesh",
      phoneNumber: "09124567665",
      status: "Online",
      avatarURl: user1,
      textPlaceHolder: "AG",
      type: "User",
      userName: "behmaneshpour",
    },
    {
      id: 1003,
      title: "maman",
      phoneNumber: "09120286220",
      status: "2 weeks ago",
      avatarURl: user2,
      textPlaceHolder: "SS",
      type: "User",
      userName: "s.saadvandi",
    },
    {
      id: 1004,
      title: "ali nooshabadi",
      phoneNumber: "09128727722",
      status: "11:57AM",
      avatarURl: user3,
      textPlaceHolder: "AN",
      type: "User",
      userName: "a.nooshabadi",
    },
    {
      id: 1005,
      title: "baba",
      phoneNumber: "09128727722",
      status: "10:07AM",
      avatarURl: user1,
      textPlaceHolder: "MB",
      type: "User",
      userName: "m.behbahani",
    },
    {
      id: 1006,
      title: "Amir Bp",
      phoneNumber: "09125832660",
      status: "13:19 AM",
      avatarURl: user1,
      textPlaceHolder: "AB",
      type: "User",
      userName: "Amir.BP",
    },
    {
      id: 1007,
      title: "Abbas Agha",
      phoneNumber: "234567889",
      status: "last seen recently",
      textPlaceHolder: "AB",
      type: "User",
      userName: "AbasAgha",
    },
    {
      id: 1008,
      title: "digikala",
      phoneNumber: "888888822",
      status: "last seen recently",
      avatarURl: user2,
      textPlaceHolder: "DK",
      type: "User",
      userName: "digikala",
    },
    {
      id: 1009,
      title: "Mojdeeeeee",
      phoneNumber: "09129619009",
      userName: "dhskjdh3434hjh",
      status: "online",
      avatarURl: user1,
      textPlaceHolder: "MK",
      type: "User",
    },
    {
      id: 1010,
      title: "fasanghari",
      phoneNumber: "09120286770",
      status: "last seen recently",

      textPlaceHolder: "FA",
      type: "Group",
      userName: "fasanghariTop",
    },
    {
      id: 1011,
      title: "Behbahania",
      phoneNumber: "09120286770",
      status: "last seen recently",
      avatarURl: groupIcon,
      textPlaceHolder: "BE",
      type: "Group",
      userName: "behbahaniha",
    },
    {
      id: 1012,
      title: "sahar joon",
      phoneNumber: "09120286220",
      status: "last seen recently",
      avatarURl: user2,
      textPlaceHolder: "SB",
      type: "User",
      userName: "sahar.beh",
    },
    {
      id: 1013,
      title: "solmaz",
      phoneNumber: "09120286220",
      status: "last seen recently",
      avatarURl: user2,
      textPlaceHolder: "SB",
      type: "User",
      userName: "solmaz.sh",
    },
    {
      id: 1014,
      title: "sanaz khanum",
      phoneNumber: "09120286770",
      status: "last seen recently",
      avatarURl: user3,
      textPlaceHolder: "SH",
      type: "User",
      userName: "sh.hosseini",
    },
  ];
}