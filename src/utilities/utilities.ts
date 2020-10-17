import ContactsMockData from "./../features/contacts/contact-service/contact-mock";

export default class Utilities {
  public static getUserDetailChatList = (username: string) => {
    const allData = ContactsMockData.contacts;
    const userData = allData.filter(x => x.userName === username);

    return userData;
  };
  public static formatAMPM = (date: Date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesString = minutes < 10 ? "0" + minutes : minutes;

    var strTime = hours + ":" + minutesString + " " + ampm;
    return strTime;
  };
}
