import Input from "../Input/Input";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="techstack-text-wrapper">
        <h4>CONTACT</h4>
      </div>

      <div className="contact-content-wrapper">
        <div className="contact-text-wrapper">
          <h3>Wanna collab? Message me here:</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eos
            natus molestias quaerat expedita! Aut officiis debitis suscipit sit
            quis! Quibusdam nemo pariatur eos cum quod corporis enim, ratione
            maxime.
          </p>
        </div>
        <form action="" id="contact-form">
          <div className="contact-name-email-wrapper">
            <Input label={"Name"} />
            <Input label={"Email"} />
          </div>
          <Input label={"Your message"} />

          <div className="contact-button-wrapper">
            <button>Contact me</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
