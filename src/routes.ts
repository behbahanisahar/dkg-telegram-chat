import { ChatContainer } from "features/chat-container/chat-container";

export interface RouteTypes {
  exact: boolean;
  path: string;
  component: any;
  parentPath?: string;
}
const routes: RouteTypes[] = [
  {
    exact: true,
    path: "/",
    component: ChatContainer,
  },
  {
    exact: true,
    path: "/:username",
    component: ChatContainer,
  },
];

export default routes;
