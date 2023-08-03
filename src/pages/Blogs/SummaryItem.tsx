import { Link } from "react-router-dom";

export const SummaryItem = ({ name, description, url, date }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between">
        <h3
          className={`font-semibold text-gray-900 pb-1 ${
            url ? "hover:underline" : ""
          }`}
        >
          <Link to={url}>{name}</Link>
        </h3>
        <h3 className="text-gray-600">{date}</h3>
      </div>
      <p className="text-md text-gray-600 font-light">{description}</p>
    </div>
  );
};
