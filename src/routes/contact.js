import LocationsList from "../components/LocationsList";
import "./contact.css";

const Contact = () => {
  return (
    <main className="contact">
      <section className="contact-section">
        <h1 className="main-heading">Contact us</h1>
        <p className="paragraph">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
        <form action="" className="contact-form">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Name"
              id="form-name"
              className="form-input message-textarea"
            />
            <label htmlFor="form-name" className="visually-hidden">
              Name
            </label>
          </div>
          <div className="input-wrapper">
            <input
              type="email"
              placeholder="Email address"
              id="form-email"
              className="form-input message-textarea"
            />
            <label htmlFor="form-email" className="visually-hidden">
              Email address
            </label>
          </div>
          <div className="input-wrapper">
            <input
              type="tel"
              placeholder="Phone"
              id="form-phone"
              className="form-input message-textarea"
            />
            <label htmlFor="form-phone" className="visually-hidden">
              Phone
            </label>
          </div>
          <div className="input-wrapper">
            <textarea
              id="form-message"
              rows="4"
              placeholder="Your message"
              className="form-input message-textarea"
            ></textarea>
            <label htmlFor="form-message" className="visually-hidden">
              Your message
            </label>
          </div>
          <button className="btn btn-light">Submit</button>
        </form>
      </section>
      <LocationsList />
    </main>
  );
};

export default Contact;
