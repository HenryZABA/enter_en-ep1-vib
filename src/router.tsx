import NotFound from "./pages/NotFound";
import SlideContainer from "./pages/SlideContainer";
import Dashboard from "./pages/Dashboard";
import GroupEditor from "./pages/GroupEditor";
import GroupPlayer from "./pages/GroupPlayer";
import { PasswordGate } from "./components/PasswordGate";

export const routers = [
    {
      path: "/",
      name: 'home',
      element: <PasswordGate><Dashboard /></PasswordGate>,
    },
    {
      path: "/slide/:id",
      name: 'slide',
      element: <SlideContainer />,
    },
    {
      path: "/group/:groupId",
      name: 'group-editor',
      element: <GroupEditor />,
    },
    {
      path: "/group/:groupId/play/:slideIndex",
      name: 'group-player',
      element: <GroupPlayer />,
    },
    /* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */
    {
      path: "*",
      name: '404',
      element: <NotFound />,
    },
];

declare global {
  interface Window {
    __routers__: typeof routers;
  }
}

window.__routers__ = routers;