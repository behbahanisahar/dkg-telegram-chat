import user1 from "../../../assets/img/img1.png";
import user2 from "../../../assets/img/img2.png";
import user3 from "../../../assets/img/img3.png";
import groupIcon from "../../../assets/img/gpIcon.png";
import ChatListItem from "../chat-list-item";

export default class ChatListMockData {
  public static Comments: ChatListItem[] = [
    {
      user: {
        id: 1,
        phoneNumber: "09120286220",
        userName: "sahar khanum",
        title: "sahar",
        status: "online",
        avatarURl: user2,
        textPlaceHolder: "SB",
        type: "User",
      },
      lastMessage: "Hello",
      lastMessageTime: "now",
    },
    {
      user: {
        id: 2,
        phoneNumber: "091205267870",
        userName: "sina beh",
        title: "sina",
        status: "online",
        avatarURl: "",
        textPlaceHolder: "SB",
      },
      lastMessage: "Hello",
      lastMessageTime: "sep 10",
      newMessageCount: 2,
    },
    {
      user: {
        id: 3,
        phoneNumber: "0912028765",
        userName: "mehdi.beh",
        title: "mehdi behmanesh",
        status: "last seen recently",
        avatarURl: "",
        textPlaceHolder: "SB",
        mutedNotification: true,
      },
      lastMessage: "salam aziizam khubi?bebin gharar shod baraye kharid koja berim?",
      lastMessageTime: "11:18 AM",
      newMessageCount: 3,
    },
    {
      user: {
        id: 4,
        phoneNumber: "09120286220",
        userName: "sahar khanum",
        title: "sahar",
        status: "online",
        avatarURl: user3,
        textPlaceHolder: "SB",
      },
      lastMessage: "Hello",
      lastMessageTime: "now",
      newMessageCount: 5,
    },
    {
      user: {
        id: 5,
        phoneNumber: "091205267870",
        userName: "sina beh",
        title: "sina",
        status: "online",
        avatarURl: "",
        textPlaceHolder: "SB",
      },
      lastMessage: "Hello",
      lastMessageTime: "sep 10",
      newMessageCount: 6,
    },

    {
      user: {
        id: 7,
        phoneNumber: "0912028765",
        userName: "gholi.loos",
        title: "Gholi jooon",
        status: "last seen recently",
        avatarURl: "",
        mutedNotification: true,
        textPlaceHolder: "GH",
        type: "User",
      },
      lastMessage: "chetori haj khanum?",
      lastMessageTime: "11:18 AM",
      newMessageCount: 10,
    },
    {
      user: {
        id: 8,
        phoneNumber: "0912028765",
        userName: "Asghar",
        title: "Asghar",
        status: "last seen recently",
        avatarURl: "",
        textPlaceHolder: "AS",
        type: "User",
      },
      lastMessage: "bashe merci",
      lastMessageTime: "11:18 AM",
    },
    {
      user: {
        id: 9,
        phoneNumber: "091233765",
        userName: "@hasan",
        title: "hasan",
        status: "last seen recently",
        avatarURl: "",
        textPlaceHolder: "HA",
        type: "User",
      },
      lastMessage: "salam aziizam khubi?",
      lastMessageTime: "11:18 AM",
      newMessageCount: 10,
    },
    {
      user: {
        id: 10,
        phoneNumber: "0912028765",
        userName: "@family",
        title: "Family",
        bio: "Ites about our family",
        status: "last seen recently",
        mutedNotification: true,
        avatarURl: groupIcon,
        textPlaceHolder: "FA",
        type: "Group",
        groupMember: [
          {
            id: 4,
            phoneNumber: "09120286220",
            userName: "sahar khanum",
            title: "sahar",
            status: "online",
            mutedNotification: true,
            avatarURl: user3,
            textPlaceHolder: "SB",
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
            mutedNotification: true,
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
        ],
      },
      lastMessage: "salam aziizam khubi?",
      lastMessageTime: "11:18 AM",
    },
    {
      user: {
        id: 1006,
        title: "Amir Bp",
        phoneNumber: "09125832660",
        status: "13:19 AM",
        avatarURl: user1,
        textPlaceHolder: "AB",
        type: "User",
        userName: "Amir.BP",
      },
      lastMessage: "salam aziizam khubi?",
      lastMessageTime: "11:18 AM",
    },
  ];
}
