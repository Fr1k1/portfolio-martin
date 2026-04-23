import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Input from "../Input/Input";
import "./Contact.scss";

const Contact = () => {
  const [mail, setMail] = useState("");
  const [description, setDescription] = useState("");
  const [sending, setSending] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!mail || !description) {
      toast.error("Please fill in your email and message");
      return;
    }
    setSending(true);
    try {
      await emailjs.sendForm(
        "service_o1njklj",
        "template_9de3j0r",
        form.current,
        "Z_0-Cs6CmcZEESvvj",
      );
      toast.success("Message sent! I'll get back to you soon.");
      form.current.reset();
      setMail("");
      setDescription("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="content-wrapper">
        <motion.div
          className="contact-inner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-left">
            <span className="section-label">Contact</span>
            <h2 className="section-title">
              Let&apos;s build
              <br />
              something together
            </h2>
            <p className="section-sub">
              Whether you have a project in mind, a question, or just want to
              say hello — I&apos;m happy to hear from you.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="detail-label">Email</span>
                <a
                  href="mailto:martin.friscic6@gmail.com"
                  className="detail-value"
                >
                  martin.friscic6@gmail.com
                </a>
              </div>
              <div className="contact-detail">
                <span className="detail-label">Location</span>
                <span className="detail-value">Varaždin, Croatia</span>
              </div>
            </div>
          </div>

          <div className="contact-right glass">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                <Input label="Name" name="name" />
                <Input
                  label="Email"
                  name="user_email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </div>

              <div className="form-field">
                <label htmlFor="description">Message</label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <button type="submit" className="btn-primary" disabled={sending}>
                {sending ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1C1C20",
            color: "#FAFAFA",
            border: "1px solid rgba(255,255,255,0.1)",
            fontFamily: "var(--font-body)",
          },
        }}
      />
    </section>
  );
};

export default Contact;
