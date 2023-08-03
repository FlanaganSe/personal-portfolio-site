import { IBlog } from "@shared/interfaces/IBlog";
import { SummaryItem } from "@pages/Blogs/SummaryItem";

export const BlogList = () => {
  const blogs = {
    id: "123213345",
    name: "Some name",
    description: "Some desc",
    url: "google.com",
    date: "Dec 13, 2023",
  } as IBlog;

  return (
    <div>
      <h1>Hi, I'm a blog list!</h1>
      {[blogs].map((blog) => (
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
