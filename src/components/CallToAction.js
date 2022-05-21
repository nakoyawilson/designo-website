import { Link } from "react-router-dom";
import "./CallToAction.css";

const CallToAction = ({ scrollToTop }) => {
  return (
    <section className="cta">
      <div>
        <h2 className="section-heading">Let’s talk about your project</h2>
        <p className="paragraph">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Link to="/contact" className="btn btn-light" onClick={scrollToTop}>
        Get in touch
      </Link>
    </section>
  );
};

export default CallToAction;
