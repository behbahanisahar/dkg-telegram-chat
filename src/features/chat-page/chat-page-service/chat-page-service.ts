import ApplicationRequest from "hooks/useService";
import ChatPageMockData from "./chat-page-mock";

class ChatServices {
  public static getAllChats(selectedUsername: string): ApplicationRequest {
    return {
      url: "", ///its for api url
      method: "GET",
      mockData: ChatPageMockData.chat,
    };
  }
}
export default ChatServices;
