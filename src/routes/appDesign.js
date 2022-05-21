import { useOutletContext } from "react-router-dom";
import InnerPagesNav from "../components/InnerPagesNav";
import Card from "../components/Card";
import airfilter from "../assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "../assets/app-design/desktop/image-eyecam.jpg";
import faceit from "../assets/app-design/desktop/image-faceit.jpg";
import loopstudios from "../assets/app-design/desktop/image-loopstudios.jpg";
import todo from "../assets/app-design/desktop/image-todo.jpg";
import "./page.css";

const AppDesign = () => {
  const scrollToTop = useOutletContext();

  return (
    <main className="page app-design">
      <section className="hero">
        <h1 className="main-heading">App design</h1>
        <p className="paragraph">
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </p>
      </section>
      <div className="card-grid grid container">
        <Card
          cardTitle="Airfilter"
          cardDescription="Solving the problem of poor indoor air quality by filtering the
      air"
          cardImg={airfilter}
        />
        <Card
          cardTitle="Eyecam"
          cardDescription="Product that lets you edit your favorite photos and videos at
      any time"
          cardImg={eyecam}
        />
        <Card
          cardTitle="Faceit"
          cardDescription="Get to meet your favorite internet superstar with the
      faceit app"
          cardImg={faceit}
        />
        <Card
          cardTitle="Todo"
          cardDescription="A todo app that features cloud sync with light and dark
      mode"
          cardImg={todo}
        />
        <Card
          cardTitle="Loopstudios"
          cardDescription="A VR experience app made for Loopstudios"
          cardImg={loopstudios}
        />
      </div>
      <InnerPagesNav scrollToTop={scrollToTop} />
    </main>
  );
};

export default AppDesign;
