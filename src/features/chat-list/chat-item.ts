import UserItem from "./user-item";

export default interface ChatItem {
  user: UserItem;
  lastMessage: string;
  lastMessageTime: string;
  newMessageCount?: number;
}
