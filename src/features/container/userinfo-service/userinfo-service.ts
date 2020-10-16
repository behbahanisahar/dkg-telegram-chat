import ApplicationRequest from "hooks/useService";
import UserMockData from "./userInfo-mock";

export default class UserServices {
  public static getUser(): ApplicationRequest {
    return {
      url: `/fakeURL/user`,
      method: "GET",
      mockData: UserMockData.user,
    };
  }
}
