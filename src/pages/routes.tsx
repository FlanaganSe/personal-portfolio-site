import { createBrowserRouter } from "react-router-dom";
// import { Layout } from "./shared/components/Layout.tsx";
// import { Layout, Header } from "./shared/components/Layout.tsx";
// import { Home } from "./pages/Home.tsx";
import ErrorPage from "./Error/Error";
// import Contact, { loader as contactLoader } from "./Contact/Contact";
// import EditContact, { action as editAction } from "./Contact/EditContact";
// import Root, { action as rootAction } from "./index";
import { About } from "./About/About";
import { Root } from "./Root/Root";
import { Resume } from "./Resume/Resume";
import { BlogList } from "./Blog/BlogList";
import { BlogPost } from "./Blog/BlogPost";
// import { loader } from "../utils/loader";
// import { action as destroyAction } from "./Contact/DestroyContact";
// import Index from "./index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "blog",
        element: <BlogList />,
      },
      {
        path: "blog/:blogId",
        element: <BlogPost />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <Root />,
  //   errorElement: <ErrorPage />,
  //   loader,
  //   action: rootAction,
  //   children: [
  //     {
  //       index: true,
  //       element: <Index />,
  //     },
  //     {
  //       path: "contacts/:contactId",
  //       element: <Contact />,
  //       loader: contactLoader,
  //     },
  //     {
  //       path: "contacts/:contactId/edit",
  //       element: <EditContact />,
  //       loader: contactLoader,
  //       action: editAction,
  //     },
  //     {
  //       path: "contacts/:contactId/destroy",
  //       action: destroyAction,
  //       errorElement: <div>Oops! There was an error.</div>,
  //     },
  //   ],
  // },
  // {
  //   path: "/contacts/:contactId",
  //   element: <Contact />,
  // },
]);
