// import { IBlog } from "@shared/interfaces/IBlog";
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import { useLocation } from "react-router-dom";
import ErrorPage from "@pages/Error/Error";
import { getBlogPost } from "@utils/getPosts";
import { IMetaData } from "@shared/interfaces/IMetaData";

export const ViewBlog = () => {
  const [metadata, setMetaData] = useState({} as IMetaData);
  const [blog, setBlog] = useState("");
  const location = useLocation();

  const blogPath = location.pathname?.split("/")[2];

  useEffect(() => {
    if (!blogPath) return;

    const fetchBlogs = async () => {
      try {
        const blogRes = await getBlogPost(blogPath);
        setBlog(blogRes.content);
        setMetaData(blogRes?.metaData || ({} as IMetaData));
      } catch (err) {
        console.error("Error fetching blog posts: ", err);
      }
    };

    fetchBlogs();
  }, [blogPath]);

  if (!blogPath) {
    return <ErrorPage />;
  }

  return (
    <div>
      <article className="prose lg:prose-l">
        <Markdown>{blog}</Markdown>
      </article>
    </div>
  );
};
