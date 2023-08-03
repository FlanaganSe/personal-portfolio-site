const classes = {
  listItem: "list-disc",
  sectionHeading: "text-xl pt-4",
};

export const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <ul>
        <li className={classes.listItem}>
          Email:{" "}
          <a
            className="underline text-blue-600"
            href="mailto:flanagansean19@gmail.com"
          >
            flanagansean19@gmail.com
          </a>
        </li>
        <li className={classes.listItem}>
          Location: Ann Arbor, MI (Interested in relocation to Denver or
          Seattle)
        </li>
        <li className={classes.listItem}>
          <img
            alt="Link to github"
            src="https://img.shields.io/badge/-FlanaganSe-000?style=flat-square&logo=github&logoColor=azure&color=181717"
          />
        </li>
        <li className={classes.listItem}>
          <img
            alt="Link to linkedin"
            src="https://img.shields.io/badge/-Sean_Flanagan-000?style=flat-square&logo=linkedin&logoColor=azure&color=0A66C2"
          />
        </li>
      </ul>
      <h3 className="my-4">
        Interested in discussing opportunities or just want to chat?{" "}
        <a className="underline" href="mailto:flanagansean19@gmail.com">
          Contact me!
        </a>
      </h3>
      <div>
        <div>
          <h2
            className={`${classes.sectionHeading} pt-4 border-t-2 border-gray-300 border-dotted`}
          >
            Work Experience
          </h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
        <div>
          <h2 className={classes.sectionHeading}>Personal Projects</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
        <div>
          <h2 className={classes.sectionHeading}>Education</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
        <div>
          <h2 className={classes.sectionHeading}>Skills</h2>
          <ul>
            <li className={classes.listItem}>
              <strong>Languages:</strong> Javascript, CSS3, Python, SQL
            </li>
            <li className={classes.listItem}>
              <strong>Frameworks:</strong> Typescript, React Native, NodeJS,
              Express, Google Firebase, PostgreSQL
            </li>
            <li className={classes.listItem}>
              <strong>Deployment:</strong> Github Actions, CircleCI, AWS
            </li>
            <li className={classes.listItem}>
              <strong>Tools:</strong> Git, GCP, Swagger, Docker, Git, CircleCI,
              New Relic
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
