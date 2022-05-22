import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import "./locations.css";

const Locations = () => {
  const latLongCanada = [43.644009, -79.394577];
  const latLongAustralia = [-30.329531, 149.788193];
  const latLongUK = [51.93944, -3.8811];
  const mapZoom = 15;

  return (
    <main className="locations">
      <h1 className="visually-hidden">Our Locations</h1>
      <div id="canada" className="location-wrapper">
        <div>
          <MapContainer
            center={latLongCanada}
            zoom={mapZoom}
            scrollWheelZoom={false}
            className="location-map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={latLongCanada}>
              <Popup>
                Designo Central Office
                <br />
                3886 Wellington Street
                <br />
                Toronto, Ontario M9C 3J5
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <section className="location">
          <h2 className="section-heading">Canada</h2>
          <address className="location-details-wrapper">
            <span>
              <span className="location-detail location-detail-heading">
                Designo Central Office
              </span>
              <span className="location-detail">3886 Wellington Street</span>
              <span className="location-detail">Toronto, Ontario M9C 3J5</span>
            </span>
            <span>
              <span className="location-detail location-detail-heading">
                Contact
              </span>
              <span className="location-detail">P : +1 253-863-8967</span>
              <span className="location-detail">M : contact@designo.co</span>
            </span>
          </address>
        </section>
      </div>
      <div id="australia" className="location-wrapper">
        <div>
          <MapContainer
            center={latLongAustralia}
            zoom={mapZoom}
            scrollWheelZoom={false}
            className="location-map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={latLongAustralia}>
              <Popup>
                Designo AU Office
                <br />
                19 Balonne Street
                <br />
                New South Wales 2443
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <section className="location">
          <h2 className="section-heading">Australia</h2>
          <address className="location-details-wrapper">
            <span>
              <span className="location-detail location-detail-heading">
                Designo AU Office
              </span>
              <span className="location-detail">19 Balonne Street</span>
              <span className="location-detail">New South Wales 2443</span>
            </span>
            <span>
              <span className="location-detail location-detail-heading">
                Contact
              </span>
              <span className="location-detail">P : (02) 6720 9092</span>
              <span className="location-detail">M : contact@designo.au</span>
            </span>
          </address>
        </section>
      </div>
      <div id="uk" className="location-wrapper">
        <div>
          <MapContainer
            center={latLongUK}
            zoom={mapZoom}
            scrollWheelZoom={false}
            className="location-map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={latLongUK}>
              <Popup>
                Designo UK Office
                <br />
                13 Colorado Way
                <br />
                Rhyd-y-fro SA8 9GA
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <section className="location">
          <h2 className="section-heading">United Kingdom</h2>
          <address className="location-details-wrapper">
            <span>
              <span className="location-detail location-detail-heading">
                Designo UK Office
              </span>
              <span className="location-detail">13 Colorado Way</span>
              <span className="location-detail">Rhyd-y-fro SA8 9GA</span>
            </span>
            <span>
              <span className="location-detail location-detail-heading">
                Contact
              </span>
              <span className="location-detail">P : 078 3115 1400</span>
              <span className="location-detail">M : contact@designo.uk</span>
            </span>
          </address>
        </section>
      </div>
    </main>
  );
};

export default Locations;
