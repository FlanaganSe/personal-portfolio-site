const classes = {
  listItem: "list-disc",
};

export const Resume = () => {
  return (
    <div>
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
    </div>
  );
};
