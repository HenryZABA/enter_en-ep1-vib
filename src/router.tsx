import NotFound from "./pages/NotFound";
import SlideContainer from "./pages/SlideContainer";
import { Navigate } from "react-router-dom";

export const routers = [
    {
      path: "/",
      name: 'home',
      element: <Navigate to="/slide/1" replace />,
    },
    {
      path: "/slide/:id",
      name: 'slide',
      element: <SlideContainer />,
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