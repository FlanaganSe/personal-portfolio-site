// const Home = (props: Props) => {

const classes = {
  container: "block pt-10 flex flex-col m-2 md:m-[10%]",
  heading: "text-2xl tracking-wide text-gray-800 my-4",
  content: "mt-2 flex-none text-lg text-gray-600 font-light md:flex-1 ",
};

export const About = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Hi, I'm Sean Flanagan!</h1>
      <h2 className={classes.content}>
        Optimist who likes software, chess, Michigan sports &#12349; (Go blue!),
        distance running, skiing, and travel!
      </h2>

      <h2 className={classes.content}>
        I'm also an energetic full stack Javascript developer with an aptitude
        for research and diving deep into technical challenges. I'd love to chat
        about what I can bring to the table so{" "}
        <a className="underline" href="mailto:flanagansean@gmai.com">
          contact me!
        </a>
      </h2>
    </div>
  );
};
