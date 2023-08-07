/**
 * @param {string} path
 * @return {string[]}
 */
export const getAllBlogAttributes = async () => {
  const markdownFilesRes = await import.meta.glob(
    "../assets/blog_posts/**/*.md"
  );

  const markdownFiles = Object.entries(markdownFilesRes).map((markdownFile) => {
    const markdownDir = markdownFile[0].split("/");
    return markdownDir[markdownDir.length - 2];
  }) as string[];

  console.log(markdownFiles);

  const content = (
    await import(`../assets/blog_posts/${markdownFiles[0]}/index.md?raw`)
  ).default;

  console.log("CONTENT");
  console.log(content);
};

/**
 * @param {string} path
 * @return {string}
 */
export const getBlogPost = async (path: string) => {
  const content = (await import(`../assets/blog_posts/${path}/index.md?raw`))
    .default;

  return content;
};
