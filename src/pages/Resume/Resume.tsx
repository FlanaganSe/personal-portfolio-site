const classes = {
  sectionHeading: "text-2xl pt-4 font-bold",
  flexJustifyContainer: "flex justify-between font-medium",
  listItem: "list-disc text-sm ml-4",
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
          <div className={`${classes.flexJustifyContainer} pt-2`}>
            <h3>Livegistics Inc.</h3>
            <h3>Detroit, MI</h3>
          </div>
          <div className={classes.flexJustifyContainer}>
            <h3>Full Stack Software Developer</h3>
            <h3>July 2021 - July 2023</h3>
          </div>
          <ul>
            <li className={classes.listItem}>
              Engineered a greenfielded web platform for construction managers,
              integrating React, TypeScript, PostgreSQL, MUI, and Google
              Firestore to enhance project management efficiency.
            </li>
            <li className={classes.listItem}>
              Developed a React Native application featuring real time
              navigation and GPS tracking for truck drivers
            </li>
            <li className={classes.listItem}>
              Migrated Firestore NoSQL database to Google BigQuery, and designed
              real-time dashboards in Google Data Studio to create internal and
              client analytics.
            </li>
            <li className={classes.listItem}>
              Architected an event-driven solution for importing/exporting
              customer data from external FTP servers, transforming and managing
              hundreds-of-thousand data rows.
            </li>
          </ul>
        </div>
        <div>
          <h2 className={classes.sectionHeading}>Personal Projects</h2>
          <div className={`${classes.flexJustifyContainer} pt-2`}>
            <h3>Twitter Clone</h3>
            <h3>
              <a
                href="https://flanaganse.github.io/twitter-clone/"
                className={"underline"}
              >
                Preview Live
              </a>
            </h3>
          </div>
          <ul>
            <li className={classes.listItem}>
              Challenged with iterating on the design of CRUD operations and
              document relations in an effort to reduce the required number of
              queries and optimize the website speed
            </li>
            <li className={classes.listItem}>
              Required implementing user authentication and leveraging the
              Context API to curate the UI depending on the logged in user and
              their personal settings
            </li>
          </ul>
          <div className={`${classes.flexJustifyContainer} pt-2`}>
            <h3>Data Analysis Capstone | University of Michigan</h3>
            <h3>Sept 2018 - May 2019</h3>
          </div>
          <ul>
            <li className={classes.listItem}>
              Collaborative capstone with the philanthropy team at the Rackham
              Graduate School that identified three actionable strategies to
              reduce Rackham marketing costs while improving donor yield
            </li>
            <li className={classes.listItem}>
              Conducted regression analysis on 50,000 row datasets and assisted
              development of 30,000+ alumni survey
            </li>
          </ul>
        </div>
        <div>
          <h2 className={classes.sectionHeading}>Education</h2>
          <div className={`${classes.flexJustifyContainer} pt-2`}>
            <h3>University of Michigan, Ann Arbor</h3>
            <h3>Graduated May 2019</h3>
          </div>
          <div className={classes.flexJustifyContainer}>
            <h4>BS in Information Science</h4>
            <h4>GPA: 3.6 Overall | 3.75 major</h4>
          </div>
        </div>
        <div>
          <h2 className={classes.sectionHeading}>Skills</h2>
          <div className={`pt-2`}>
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
                <strong>Tools:</strong> Git, GCP, Swagger, Docker, Git,
                CircleCI, New Relic
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
