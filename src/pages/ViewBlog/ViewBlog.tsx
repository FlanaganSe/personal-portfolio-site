// import { IBlog } from "@shared/interfaces/IBlog";
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import { useLocation } from "react-router-dom";
import ErrorPage from "@pages/Error/Error";
import { getBlogPost } from "@utils/getPosts";

export const ViewBlog = () => {
  const [blog, setBlog] = useState("");
  const location = useLocation();

  const blogPath = location.pathname?.split("/")[2];
  console.log("blogpath -", blogPath);

  //   const blogs = {
  //     id: "123213345",
  //     name: "Some name",
  //     description: "Some desc",
  //     url: "google.com",
  //     date: "Dec 13, 2023",
  //   } as IBlog;

  useEffect(() => {
    if (!blogPath) return;

    const fetchBlogs = async () => {
      try {
        const blogsRes = await getBlogPost(blogPath);
        setBlog(blogsRes);
      } catch (err) {
        console.error("Error fetching blog posts: ", err);
      }
    };

    fetchBlogs();
  }, [location]);

  console.log("blog -", blog);

  if (!blogPath) {
    return <ErrorPage />;
  }

  return (
    <div>
      <Markdown>{blog}</Markdown>
    </div>
  );
};
