import { Suspense, useEffect, useState } from "react";
import { SummaryItem } from "./SummaryItem";
import { IBlog } from "@shared/interfaces/IBlog";
import { getAllBlogAttributes } from "@utils/getPosts";

export const BlogList = () => {
  const [blogsss, setBlogsss] = useState([]);
  const blogs = [
    {
      id: "123213345",
      name: "Some name",
      description: "Some desc",
      url: "google.com",
      date: "Dec 13, 2023",
    },
    {
      id: "243534235",
      name: "Some name2",
      description: "Some descs",
      url: "yahoo.com",
      date: "Dec 13, 2023",
    },
  ] as IBlog[];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRes = await getAllBlogAttributes();
        setBlogsss(blogsRes);
      } catch (err) {
        console.error("Error fetching blog posts: ", err);
      }
    };

    fetchBlogs();
  }, []);

  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("blogsss", blogsss);

  return (
    <div>
      <h1>Hi, I'm a blog list!</h1>
      <Suspense fallback={"Loading..."}>
        {blogs.map((blog) => (
          <SummaryItem
            key={blog.id}
            name={blog.name}
            description={blog.description}
            date={blog.date}
            url={blog.url}
          />
        ))}
      </Suspense>
    </div>
  );
};
