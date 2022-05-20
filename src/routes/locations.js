import australiaMapDesktop from "../assets/locations/desktop/image-map-australia.png";
import canadaMapDesktop from "../assets/locations/desktop/image-map-canada.png";
import ukMapDesktop from "../assets/locations/desktop/image-map-united-kingdom.png";
import australiaMapTablet from "../assets/locations/tablet/image-map-australia.png";
import canadaMapTablet from "../assets/locations/tablet/image-map-canada.png";
import ukMapTablet from "../assets/locations/tablet/image-map-uk.png";
import "./locations.css";

const Locations = () => {
  return (
    <main className="locations">
      <h1 className="visually-hidden">Our Locations</h1>
      <picture>
        <source media="(max-width: 375px)" srcSet={canadaMapDesktop} />
        <source
          media="(max-width: 800px) and (min-width: 376px)"
          srcSet={canadaMapTablet}
        />
        <source media="(min-width: 801px)" srcSet={canadaMapDesktop} />
        <img
          src={canadaMapDesktop}
          alt="Map of Canada"
          className="location-map"
        />
      </picture>
      <section className="location" id="canada">
        <h2 className="section-heading">Canada</h2>
        <address className="location-details-wrapper">
          <span className="location-detail location-detail-heading">
            Designo Central Office
          </span>
          <span className="location-detail">3886 Wellington Street</span>
          <span className="location-detail">Toronto, Ontario M9C 3J5</span>
          <span className="location-detail location-detail-heading">
            Contact
          </span>
          <span className="location-detail">P : +1 253-863-8967</span>
          <span className="location-detail">M : contact@designo.co</span>
        </address>
      </section>
      <picture>
        <source media="(max-width: 375px)" srcSet={australiaMapDesktop} />
        <source
          media="(max-width: 800px) and (min-width: 376px)"
          srcSet={australiaMapTablet}
        />
        <source media="(min-width: 801px)" srcSet={australiaMapDesktop} />
        <img
          src={australiaMapDesktop}
          alt="Map of Australia"
          className="location-map"
        />
      </picture>
      <section className="location" id="australia">
        <h2 className="section-heading">Australia</h2>
        <address className="location-details-wrapper">
          <span className="location-detail location-detail-heading">
            Designo AU Office
          </span>
          <span className="location-detail">19 Balonne Street</span>
          <span className="location-detail">New South Wales 2443</span>
          <span className="location-detail location-detail-heading">
            Contact
          </span>
          <span className="location-detail">P : (02) 6720 9092</span>
          <span className="location-detail">M : contact@designo.au</span>
        </address>
      </section>
      <picture>
        <source media="(max-width: 375px)" srcSet={ukMapDesktop} />
        <source
          media="(max-width: 800px) and (min-width: 376px)"
          srcSet={ukMapTablet}
        />
        <source media="(min-width: 801px)" srcSet={ukMapDesktop} />
        <img
          src={ukMapDesktop}
          alt="Map of United Kingdom"
          className="location-map"
        />
      </picture>
      <section className="location" id="united-kingdom">
        <h2 className="section-heading">United Kingdom</h2>
        <address className="location-details-wrapper">
          <span className="location-detail">Designo UK Office</span>
          <span className="location-detail">13 Colorado Way</span>
          <span className="location-detail">Rhyd-y-fro SA8 9GA</span>
          <span className="location-detail">Contact</span>
          <span className="location-detail">P : 078 3115 1400</span>
          <span className="location-detail">M : contact@designo.uk</span>
        </address>
      </section>
    </main>
  );
};

export default Locations;
