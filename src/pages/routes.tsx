import { createBrowserRouter } from "react-router-dom";
// import { Layout } from "./shared/components/Layout.tsx";
// import { Layout, Header } from "./shared/components/Layout.tsx";
// import { Home } from "./pages/Home.tsx";
import ErrorPage from "./Error/Error";
import Contact from "./Contact/Contact";
import Root from "./Root";
import { loader } from "../utils/loader";
import { action } from "../utils/action";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader,
    action,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
  // {
  //   path: "/contacts/:contactId",
  //   element: <Contact />,
  // },
]);
