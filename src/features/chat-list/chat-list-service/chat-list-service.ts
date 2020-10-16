import ApplicationRequest from "hooks/useService";
import ChatListMockData from "./chat-list-mock";

class ChatListServices {
  public static getAllChatList(): ApplicationRequest {
    return {
      url: "", ///its for api url
      method: "GET",
      mockData: ChatListMockData.Comments,
    };
  }
}
export default ChatListServices;
