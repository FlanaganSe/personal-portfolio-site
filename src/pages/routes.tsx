import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Error/Error";
import { About } from "./About/About";
import { Root } from "./Root";
import { Resume } from "./Resume/Resume";
import { BlogList } from "./Blogs/BlogList";
import { ViewBlog } from "./ViewBlog/ViewBlog";

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
        element: <ViewBlog />,
      },
    ],
  },
]);
