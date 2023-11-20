import { Link } from "react-router-dom";

export const SummaryItem = ({ title, description, path, date }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between gap-2">
        <h3
          className={`font-semibold text-gray-900 pb-1 ${
            path ? "hover:underline" : ""
          }`}
        >
          <Link to={path}>{title}</Link>
        </h3>
        <h3 className="text-gray-600">{date.toDateString()}</h3>
      </div>
      <p className="text-md text-gray-600 font-light">{description}</p>
    </div>
  );
};
