import { Link, useOutletContext } from "react-router-dom";
import InnerPagesNav from "../components/InnerPagesNav";
import "./home.css";
import passionateIllustration from "../assets/home/desktop/illustration-passionate.svg";
import friendlyIllustration from "../assets/home/desktop/illustration-friendly.svg";
import resourcefulIllustration from "../assets/home/desktop/illustration-resourceful.svg";

const Home = () => {
  const scrollToTop = useOutletContext();

  return (
    <main className="home">
      <section className="hero">
        <h1 className="main-heading">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="paragraph">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Link to="/contact" className="btn btn-light" onClick={scrollToTop}>
          Learn more
        </Link>
      </section>
      <InnerPagesNav scrollToTop={scrollToTop} />
      <div className="qualities grid container">
        <section className="quality">
          <div className="illustration-wrapper">
            <img
              src={passionateIllustration}
              alt=""
              className="quality-illustration"
            />
          </div>
          <div className="wrapper">
            <h2 className="section-heading">Passionate</h2>
            <p className="paragraph">
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </section>
        <section className="quality">
          <div className="illustration-wrapper">
            <img
              src={resourcefulIllustration}
              alt=""
              className="quality-illustration"
            />
          </div>
          <div className="wrapper">
            <h2 className="section-heading">Resourceful</h2>
            <p className="paragraph">
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </section>
        <section className="quality">
          <div className="illustration-wrapper">
            <img
              src={friendlyIllustration}
              alt=""
              className="quality-illustration"
            />
          </div>
          <div className="wrapper">
            <h2 className="section-heading">Friendly </h2>
            <p className="paragraph">
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
