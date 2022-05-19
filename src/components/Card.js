import "./Card.css";

const Card = ({ cardTitle, cardDescription, cardImg }) => {
  return (
    <section className="card">
      <img src={cardImg} alt="" className="card-img" />
      <div className="content-wrapper">
        <h2 className="card-title">{cardTitle}</h2>
        <p className="card-description">{cardDescription}</p>
      </div>
    </section>
  );
};

export default Card;
