import UserItem from "../../entities/user-item";

export default interface ChatListItem {
  user: UserItem;
  lastMessage: string;
  lastMessageTime: string;
  newMessageCount?: number;
}
