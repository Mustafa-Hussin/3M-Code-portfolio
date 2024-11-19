import "./contact.css";
import { useState } from "react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.phone) {
      setError("Please fill in all fields");
      return;
    }

    const phoneNumber = "+201066094050";
    const whatsappMessage = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="contact-us">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="contact-header"
      >
        <h1 className="title">
          <span className="icon-envelope"></span>
          تواصل معنا اليوم!
        </h1>
        <p className="sub-title">
          نحن هنا لمساعدتك. املأ النموذج أدناه وسنعود إليك قريبًا.
        </p>
      </motion.div>

      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="contact-animation"
        >
          <Lottie
            animationData={submitted ? doneAnimation : contactAnimation}
            loop={!submitted}
          />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="contact-form"
        >
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="اسمك"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="بريدك الالكتروني"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="رقم هاتفك"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="رسالتك"
              className="form-input message-input"
              rows="4"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="submit-button"
            disabled={submitted}
          >
            {submitted ? "تم إرسال رسالتك بنجاح!" : "أرسل رسالتك"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;