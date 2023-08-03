import { SummaryItem } from "./SummaryItem";
import { IBlog } from "@shared/interfaces/IBlog";
import { getPostMetaData } from "@utils/getPosts";

export const BlogList = () => {
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

  const x = getPostMetaData();
  console.log(x);

  return (
    <div>
      <h1>Hi, I'm a blog list!</h1>
      {blogs.map((blog) => (
        <SummaryItem
          key={blog.id}
          name={blog.name}
          description={blog.description}
          date={blog.date}
          url={blog.url}
        />
      ))}
    </div>
  );
};
