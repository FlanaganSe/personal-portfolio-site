import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";

export const About = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const contentRes = (await import(`../../assets/pages/About.md?raw`))
          .default;
        setContent(contentRes);
      } catch (err) {
        console.error("Error fetching about content: ", err);
      }
    };

    fetchContent();
  });

  return (
    <div className="flex flex-col">
      <article className="prose lg:prose-l">
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
};
