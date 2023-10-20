import { useRef, useState } from "react";
import Input from "../Input/Input";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import toast, { Toaster } from "react-hot-toast";

const success = () => toast.success("Successfully sent!");
const failure = () => toast.error("Something went wrong");

const Contact = () => {
  const [mail, setMail] = useState("");
  const [description, setDescription] = useState("");

  const form = useRef();

  async function sendEmail(e) {
    e.preventDefault();

    if (mail === "" || description === "") {
      toast.error("Please enter your email and description");
      return;
    }

    try {
      await emailjs.sendForm(
        "service_o1njklj",
        "template_9de3j0r",
        form.current,
        "Z_0-Cs6CmcZEESvvj"
      );
      console.log("Uspjesno poslano");
      success();
    } catch (err) {
      console.log("Doslo je do pogreske");
      failure();
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact-wrapper" id="contact">
        <div className="techstack-text-wrapper">
          <h4>CONTACT</h4>
        </div>

        <div className="contact-content-wrapper">
          <div className="contact-text-wrapper">
            <h3>Wanna collab? Message me here:</h3>
            <p>
              Hey there! If youre as enthusiastic about creating something
              awesome as I am, Id love to connect. Whether you have a project
              idea, need some technical advice, or just want to say hello, Im
              just a message away. Your thoughts and ideas matter to me, and Im
              eager to hear what you have in mind. Lets embark on this journey
              of creativity and innovation together! Cant wait to start the
              conversation with you!
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
              <Toaster />
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
