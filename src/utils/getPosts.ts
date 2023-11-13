import { metadata } from "../assets/blog_posts/metadata";

/**
 * @param {string} path
 * @return {string}
 */
export const getBlogPost = async (path: string) => {
  const blogMetaData = metadata.find((data) => {
    data.path === path;
  });
  const content = (await import(`../assets/blog_posts/${path}/index.md?raw`))
    .default;

  return {
    content,
    metaData: blogMetaData,
  };
};
