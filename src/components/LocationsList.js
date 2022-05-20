import { HashLink } from "react-router-hash-link";
import australiaIllustration from "../assets/shared/desktop/illustration-australia.svg";
import canadaIllustration from "../assets/shared/desktop/illustration-canada.svg";
import ukIllustration from "../assets/shared/desktop/illustration-united-kingdom.svg";
import "./LocationsList.css";

const LocationsList = () => {
  return (
    <ul className="locations-list">
      <li className="locations-list-item">
        <span className="illustration-wrapper">
          <img
            src={canadaIllustration}
            alt=""
            className="location-illustration"
          />
        </span>
        <h2 className="list-heading">Canada</h2>
        <HashLink to="/locations#canada" className="btn btn-dark">
          See location
        </HashLink>
      </li>
      <li className="locations-list-item">
        <span className="illustration-wrapper">
          <img
            src={australiaIllustration}
            alt=""
            className="location-illustration"
          />
        </span>
        <h2 className="list-heading">Australia</h2>
        <HashLink to="/locations#australia" className="btn btn-dark">
          See location
        </HashLink>
      </li>
      <li className="locations-list-item">
        <span className="illustration-wrapper">
          <img src={ukIllustration} alt="" className="location-illustration" />
        </span>
        <h2 className="list-heading">United Kingdom</h2>
        <HashLink to="/locations#united-kingdom" className="btn btn-dark">
          See location
        </HashLink>
      </li>
    </ul>
  );
};

export default LocationsList;
