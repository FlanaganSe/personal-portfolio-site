import { IMetaData } from "@shared/interfaces/IMetaData";

export const metadata = [
  {
    path: "/blog/effective-learning",
    title: "Strategies for effective learning",
    date: new Date("2021-09-01"),
    author: "Sean Flanagan",
    description: "Researching strategies for more effective learning",
  },
  {
    path: "/blog/footer-to-bottom",
    title: "Forcing the footer to the bottom of the page",
    date: new Date("2021-09-19"),
    author: "Sean Flanagan",
    description:
      "A flexible approach for pushing the footer to the bottom of the page",
  },
  {
    path: "/blog/healthy-habits-research",
    title: "Categorizing Healthy Habits",
    date: new Date("2021-08-20"),
    author: "Sean Flanagan",
    description: "A researched list of healthy habits",
  },
  {
    path: "/blog/rebalancing-bonus",
    title: "Determining the existence of a rebalancing bonus",
    date: new Date("2022-03-19"),
    author: "Sean Flanagan",
    description: "Improving investment returns with the Kelly Criterion",
  },
] as IMetaData[];
