/**
 * @param {string} path
 * @return {string}
 */
export const getBlogPost = async (path: string) => {
  const content = (await import(`../assets/blog_posts/${path}/index.md?raw`))
    .default;

  return content;
};

const getOldNowPost = async (path: string) => {
  const content = (await import(`../assets/now_posts/${path}/index.md?raw`))
    .default;

  return content;
};

const getCurrentNowPost = async () => {
  const content = (await import(`../assets/pages/Now.md?raw`)).default;
  return content;
};

/**
 * @param {string} path
 * @return {string}
 */
export const getNowPost = async (path?: string) => {
  if (path) {
    return getOldNowPost(path);
  } else {
    return getCurrentNowPost();
  }
};
