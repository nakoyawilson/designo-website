import LocationsList from "../components/LocationsList";
import heroImgDesktop from "../assets/about/desktop/image-about-hero.jpg";
import heroImgTablet from "../assets/about/tablet/image-about-hero.jpg";
import heroImgMobile from "../assets/about/mobile/image-about-hero.jpg";
import realDealDesktop from "../assets/about/desktop/image-real-deal.jpg";
import realDealTablet from "../assets/about/tablet/image-real-deal.jpg";
import realDealMobile from "../assets/about/mobile/image-real-deal.jpg";
import worldClassDesktop from "../assets/about/desktop/image-world-class-talent.jpg";
import worldClassTablet from "../assets/about/tablet/image-world-class-talent.jpg";
import worldClassMobile from "../assets/about/mobile/image-world-class-talent.jpg";
import "./about.css";

const About = () => {
  return (
    <main className="about">
      <picture>
        <source media="(max-width: 375px)" srcSet={heroImgMobile} />
        <source
          media="(max-width: 800px) and (min-width: 376px)"
          srcSet={heroImgTablet}
        />
        <source media="(min-width: 801px)" srcSet={heroImgDesktop} />
        <img src={heroImgMobile} alt="" className="" />
      </picture>
      <section className="hero">
        <h1 className="main-heading">About us</h1>
        <p className="paragraph">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients' audiences.
        </p>
      </section>
      <picture>
        <source media="(max-width: 375px)" srcSet={worldClassMobile} />
        <source
          media="(max-width: 800px) and (min-width: 376px)"
          srcSet={worldClassTablet}
        />
        <source media="(min-width: 801px)" srcSet={worldClassDesktop} />
        <img src={worldClassMobile} alt="" className="" />
      </picture>
      <section class="about-section">
        <h2 className="section-heading">World-class talent</h2>
        <p className="paragraph">
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p className="paragraph">
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </section>
      <LocationsList />
      <picture>
        <source media="(max-width: 375px)" srcSet={realDealMobile} />
        <source
          media="(max-width: 800px) and (min-width: 376px)"
          srcSet={realDealTablet}
        />
        <source media="(min-width: 801px)" srcSet={realDealDesktop} />
        <img src={realDealMobile} alt="" className="" />
      </picture>
      <section class="about-section">
        <h2 className="section-heading">The real deal</h2>
        <p className="paragraph">
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <p className="paragraph">
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
      </section>
    </main>
  );
};

export default About;
