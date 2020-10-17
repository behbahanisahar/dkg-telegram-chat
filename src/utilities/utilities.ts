import ContactsMockData from "./../features/contacts/contact-service/contact-mock";

export default class Utilities {
  public static getUserDetailChatList = (username: string) => {
    debugger;
    const allData = ContactsMockData.contacts;
    const userData = allData.filter(x => x.userName === username);

    return userData;
  };
}
