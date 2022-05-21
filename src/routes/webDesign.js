import { useOutletContext } from "react-router-dom";
import InnerPagesNav from "../components/InnerPagesNav";
import Card from "../components/Card";
import blogr from "../assets/web-design/desktop/image-blogr.jpg";
import builder from "../assets/web-design/desktop/image-builder.jpg";
import camp from "../assets/web-design/desktop/image-camp.jpg";
import expressImg from "../assets/web-design/desktop/image-express.jpg";
import photon from "../assets/web-design/desktop/image-photon.jpg";
import transferImg from "../assets/web-design/desktop/image-transfer.jpg";
import "./page.css";

const Web = () => {
  const scrollToTop = useOutletContext();

  return (
    <main className="page web-design">
      <section className="hero">
        <h1 className="main-heading">Web design</h1>
        <p className="paragraph">
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </section>
      <div className="card-grid grid container">
        <Card
          cardTitle="Express"
          cardDescription="A multi-carrier shipping website for ecommerce businesses"
          cardImg={expressImg}
        />
        <Card
          cardTitle="Transfer"
          cardDescription="Site for low-cost money transfers and sending money within seconds"
          cardImg={transferImg}
        />
        <Card
          cardTitle="Photon"
          cardDescription="A state-of-the-art music player with high&#8209;resolution audio and DSP effects"
          cardImg={photon}
        />
        <Card
          cardTitle="Builder"
          cardDescription="Connects users with local contractors based on their location"
          cardImg={builder}
        />
        <Card
          cardTitle="Blogr"
          cardDescription="Blogr is a platform for creating an online blog or publication"
          cardImg={blogr}
        />
        <Card
          cardTitle="Camp"
          cardDescription="Get expert training in coding, data, design, and digital marketing"
          cardImg={camp}
        />
      </div>
      <InnerPagesNav scrollToTop={scrollToTop} />
    </main>
  );
};

export default Web;
