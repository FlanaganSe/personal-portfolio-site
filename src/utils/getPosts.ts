export const getPostMetaData = async () => {
  //   const files = await import.meta.glob(
  //     "../assets/blog_posts/effective-learning/index.md"
  //   );
  const markdownFiles = await import.meta.glob("../assets/blog_posts/**/*.md");

  console.log("files");
  console.log(markdownFiles);
  //   const content = (
  //     await import(`../assets/blog_posts/effective-learning/index.md?raw`)
  //   ).default;

  //   console.log("hi");
  //   console.log(content);

  //   const folder = "constants/blog_posts";
  //   const files = fs.readdirSync(folder);
  //   const markdownPosts = files.filter((file) => file.endsWith(".md"));
  //   const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  //   return slugs;
};
