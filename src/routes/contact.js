import { useForm } from "react-hook-form";
import LocationsList from "../components/LocationsList";
import ErrorMessage from "../components/ErrorMessage";
import "./contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    document
      .querySelectorAll(".form-input")
      .forEach((formInput) => (formInput.value = ""));
  };

  return (
    <main className="contact">
      <section className="contact-section">
        <div className="content-wrapper">
          <h1 className="main-heading">Contact Us</h1>
          <p className="paragraph">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Name"
              id="form-name"
              className="form-input"
              {...register("fullName", { required: true })}
            />
            <label htmlFor="form-name" className="visually-hidden">
              Name
            </label>
            {errors.fullName?.type === "required" && (
              <ErrorMessage errorMsg="Can't be empty" />
            )}
          </div>
          <div className="input-wrapper">
            <input
              type="email"
              placeholder="Email address"
              id="form-email"
              className="form-input"
              {...register("emailAddress", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
            />
            <label htmlFor="form-email" className="visually-hidden">
              Email address
            </label>
            {errors.emailAddress?.type === "required" && (
              <ErrorMessage errorMsg="Can't be empty" />
            )}
            {errors.emailAddress?.type === "pattern" && (
              <ErrorMessage errorMsg="Please use a valid email address" />
            )}
          </div>
          <div className="input-wrapper">
            <input
              type="tel"
              placeholder="Phone"
              id="form-phone"
              className="form-input"
              {...register("phoneNumber", { pattern: /^(\d*)$/ })}
            />
            <label htmlFor="form-phone" className="visually-hidden">
              Phone
            </label>
            {errors.phoneNumber?.type === "pattern" && (
              <ErrorMessage errorMsg="Please enter a valid phone number" />
            )}
          </div>
          <div className="input-wrapper">
            <textarea
              id="form-message"
              rows="4"
              placeholder="Your message"
              className="form-input"
              {...register("yourMessage", { required: true })}
            ></textarea>
            <label htmlFor="form-message" className="visually-hidden">
              Your message
            </label>
            {errors.yourMessage?.type === "required" && (
              <ErrorMessage errorMsg="Can't be empty" />
            )}
          </div>
          <button className="btn btn-light btn-submit">Submit</button>
        </form>
      </section>
      <LocationsList />
    </main>
  );
};

export default Contact;
