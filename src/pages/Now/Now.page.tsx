import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getNowPost } from "@utils/getPosts";

export const NowPage = () => {
  const [content, setContent] = useState("");
  const location = useLocation();

  const nowPath = location.pathname?.split("/")[2];

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const contentRes = await getNowPost(nowPath);
        setContent(contentRes);
      } catch (err) {
        console.error("Error fetching now content: ", err);
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
