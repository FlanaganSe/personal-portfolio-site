import { Suspense } from "react";
import { SummaryItem } from "./SummaryItem";
import { metadata } from "@assets/blog_posts/metadata";

export const BlogList = () => {
  const sortedBlogsMetaData = metadata.sort((blogA, blogB) => {
    return blogB.date.getTime() - blogA.date.getTime();
  });

  return (
    <div>
      <h1>Blog Posts</h1>
      <p className="my-8">
        No technical blogs, yet. Hopefully one day. It would be good for
        practicing technical writing but I would prefer to write important work
        only if I felt I were a top tier expert on the subject I'm writing
        about.
      </p>
      <Suspense fallback={"Loading..."}>
        {sortedBlogsMetaData.map((blog) => (
          <SummaryItem
            key={blog.title}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            path={blog.path}
          />
        ))}
      </Suspense>
    </div>
  );
};
