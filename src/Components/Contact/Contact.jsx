import { useRef, useState } from "react";
import Input from "../Input/Input";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
const Contact = () => {
  const [mail, setMail] = useState("");
  const [description, setDescription] = useState("");

  const form = useRef();

  async function sendEmail(e) {
    e.preventDefault();

    // if (mail === "" || description === "") {
    //   //toast.error("Molim ispunite podatke za mail i opis");
    //   return;
    // }

    try {
      await emailjs.sendForm(
        "service_o1njklj",
        "template_9de3j0r",
        form.current,
        "Z_0-Cs6CmcZEESvvj"
      );
      //toast.success("Uspješno poslano");
      console.log("Uspjesno poslano");
    } catch (err) {
      console.log("Doslo je do pogreske");
      // toast.error("Nešto je pošlo po krivu");
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact-wrapper">
        <div className="techstack-text-wrapper">
          <h4>CONTACT</h4>
        </div>

        <div className="contact-content-wrapper">
          <div className="contact-text-wrapper">
            <h3>Wanna collab? Message me here:</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              eos natus molestias quaerat expedita! Aut officiis debitis
              suscipit sit quis! Quibusdam nemo pariatur eos cum quod corporis
              enim, ratione maxime.
            </p>
          </div>
          <form action="" id="contact-form" ref={form}>
            <div className="contact-name-email-wrapper">
              <Input label={"Name"} name="name" />
              <Input
                label={"Email"}
                name="user_email"
                id="mail_input"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>

            <div className="textarea-wrapper">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="contact-button-wrapper">
              <button onClick={sendEmail}>Contact me</button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
