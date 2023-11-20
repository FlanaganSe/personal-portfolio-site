/**
 * @param {string} path
 * @return {string}
 */
export const getBlogPost = async (path: string) => {
  const content = (await import(`../assets/blog_posts/${path}/index.md?raw`))
    .default;

  return content;
};
