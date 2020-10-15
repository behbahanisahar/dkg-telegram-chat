export default interface UserItem {
  phoneNumber: string;
  userName: string;
  title: string;
  id: number;
  status: string;
  groupMember?: UserItem[];
  role?: string;
  avatarURl: string;
  textPlaceHolder: string;
  type?: "User" | "Group";
  bio?: string;
}
