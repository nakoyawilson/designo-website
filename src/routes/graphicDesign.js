import { useOutletContext } from "react-router-dom";
import InnerPagesNav from "../components/InnerPagesNav";
import Card from "../components/Card";
import boxedWater from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import change from "../assets/graphic-design/desktop/image-change.jpg";
import science from "../assets/graphic-design/desktop/image-science.jpg";
import "./page.css";

const GraphicDesign = () => {
  const scrollToTop = useOutletContext();

  return (
    <main className="page graphic-design">
      <section className="hero">
        <h1 className="main-heading">Graphic design</h1>
        <p className="paragraph">
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </section>
      <div className="card-grid grid container">
        <Card
          cardTitle="Tim Brown"
          cardDescription="A book cover designed for Tim Brown’s new release, ‘Change’"
          cardImg={change}
        />
        <Card
          cardTitle="Boxed water"
          cardDescription="A simple packaging concept made for Boxed Water"
          cardImg={boxedWater}
        />
        <Card
          cardTitle="Science!"
          cardDescription="A poster made in collaboration with the Federal Art Project"
          cardImg={science}
        />
      </div>
      <InnerPagesNav scrollToTop={scrollToTop} />
    </main>
  );
};

export default GraphicDesign;
