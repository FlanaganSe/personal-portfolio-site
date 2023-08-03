const classes = {
  content: "mt-2 text-lg text-gray-600",
};

export const About = () => {
  return (
    <div className="flex flex-col">
      <h1>Hi, I'm Sean Flanagan!</h1>
      <h3 className={classes.content}>
        Optimist who likes software, chess, Michigan sports &#12349; (Go blue!),
        distance running, skiing, and travel!
      </h3>

      <h3 className={classes.content}>
        I'm also an energetic full stack Javascript developer with an aptitude
        for research and diving deep into technical challenges. I'd love to chat
        about what I can bring to the table so{" "}
        <a className="underline" href="mailto:flanagansean@gmai.com">
          contact me!
        </a>
      </h3>
    </div>
  );
};
