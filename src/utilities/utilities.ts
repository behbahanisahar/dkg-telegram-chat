import ChatListMockData from "features/chat-list/chat-list-service/chat-list-mock";

export default class Utilities {
  public static getUserDetailChatList = (username: string) => {
    const allData = ChatListMockData.Comments;
    const userData = allData.filter(x => x.user.userName === username);

    return userData;
  };
}
