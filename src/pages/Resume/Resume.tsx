import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";

export const Resume = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const contentRes = (await import(`../../assets/pages/Resume.md?raw`))
          .default;
        setContent(contentRes);
      } catch (err) {
        console.error("Error fetching about content: ", err);
      }
    };

    fetchContent();
  });

  return (
    <div>
      <article className="prose lg:prose prose-img:m-0 prose-li:m-0">
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
};
