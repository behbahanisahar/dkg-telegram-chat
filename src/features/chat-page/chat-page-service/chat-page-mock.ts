import ChatItem from "../chat-item";
import user1 from "../../../assets/img/img1.png";
import user2 from "../../../assets/img/img2.png";
import user3 from "../../../assets/img/img3.png";
import groupIcon from "../../../assets/img/gpIcon.png";

export default class ChatPageMockData {
  public static chat: ChatItem[] = [
    {
      id: "sbfjsdh",
      sender: {
        id: 1001,
        title: "sahar joon",
        phoneNumber: "09120286220",
        status: "last seen recently",
        avatarURl: user2,
        textPlaceHolder: "SB",
        type: "User",
        userName: "@sahar.beh",
      },
      text:
        "Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is row. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).Use .flex-row to set a horizontal direction (the browser default), or .flex-row-reverse to start the horizontal direction from the opposite side.",
      receiveTime: "19:18 PM",
    },
    {
      id: "grgergw",
      sender: {
        id: 1001,
        title: "Amir Bp",
        phoneNumber: "09125832660",
        status: "13:19 AM",
        avatarURl: user1,
        textPlaceHolder: "AB",
        type: "User",
        userName: "@Amir.BP",
      },
      repliedTo: {
        id: "sbfjsdh",
        sender: {
          id: 1001,
          title: "sahar joon",
          phoneNumber: "09120286220",
          status: "last seen recently",
          avatarURl: user2,
          textPlaceHolder: "SB",
          type: "User",
          userName: "@sahar.beh",
        },
        text:
          "Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is row. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).Use .flex-row to set a horizontal direction (the browser default), or .flex-row-reverse to start the horizontal direction from the opposite side.",
        receiveTime: "19:18 PM",
      },
      text: "chetori kachal",
      receiveTime: "10:10 PM",
    },
    {
      id: "sdfsdfsfs",
      sender: {
        id: 1001,
        title: "sanaz khanum",
        phoneNumber: "09120286770",
        status: "last seen recently",
        avatarURl: user3,
        textPlaceHolder: "SH",
        type: "User",
        userName: "@sahar.beh",
      },
      text:
        "Bootstrap employs a handful of important global styles and settings that you’ll need to be aware of when using it, all of which are almost exclusively geared towards the normalization of cross browser styles. Let’s dive in.",
      receiveTime: "05:10 PM",
    },
    {
      id: "sdfsdfsfs",
      sender: {
        id: 1001,
        title: "Behbahania",
        phoneNumber: "09120286770",
        status: "last seen recently",
        avatarURl: groupIcon,
        textPlaceHolder: "BE",
        type: "User",
        userName: "@sahar.beh",
      },
      text: "salam sobe hamegi bekheir chetoriiiiid?",
      receiveTime: "05:10 PM",
    },
    {
      id: "sdfsdfsfs",
      sender: {
        id: 1001,
        title: "fasanghari",
        phoneNumber: "09120286770",
        status: "last seen recently",

        textPlaceHolder: "FA",
        type: "User",
        userName: "@fasanghariTop",
      },
      text:
        "Bootstrap employs a handful of important global styles and settings that you’ll need to be aware of when using it, all of which are almost exclusively geared towards the normalization of cross browser styles. Let’s dive in.",
      receiveTime: "05:10 PM",
    },
  ];
}
