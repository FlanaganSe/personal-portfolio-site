// const Home = (props: Props) => {

const classes = {
  container: "block pt-12 flex flex-col",
  title: "pb-6 md:w-full md:max-w-150 md:p-0",
  heading:
    "text-2xl font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",
  content: "flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20",
};

export const About = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Hi, I'm Sean Flanagan!</h1>
      <h2 className={classes.content}>
        Optimist who likes software, chess, Michigan sports &#12349; (Go blue!),
        distance running, skiing, and travel! I'm currently open to work and am
        seeking new and exciting opportunities
      </h2>
    </div>
  );
};
