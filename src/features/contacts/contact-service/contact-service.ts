import ApplicationRequest from "hooks/useService";
import ContactsMockData from "./contact-mock";

class ContactListServices {
  public static getAllContacts(): ApplicationRequest {
    return {
      url: "", ///its for api url
      method: "GET",
      mockData: ContactsMockData.contacts,
    };
  }
}
export default ContactListServices;
