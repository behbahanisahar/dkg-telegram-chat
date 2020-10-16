import UserItem from "entities/user-item";

export default interface ChatItem {
  id?: string;
  sender: UserItem;
  text: string;
  repliedTo?: ChatItem;
  receiveTime: string;
}
