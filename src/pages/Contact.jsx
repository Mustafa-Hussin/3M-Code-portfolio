import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import doneAnimation from "../animation/done.json";
import contactAnimation from "../animation/contact.json";
import './pages.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // تحقق من الحقول المطلوبة
    if (!name || !email || !message || !phone) {
      setError("Please fill in all fields.");
      return;
    }

    // رقم WhatsApp
    const phoneNumber = "+201066094050";
    const whatsappMessage = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // فتح رابط WhatsApp
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    setError("");
  };

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        تواصل معنا اليوم!
      </h1>
      <p className="sub-title">
        نحن هنا لمساعدتك. املأ النموذج أدناه وسنعود إليك قريبًا.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex">
            <label htmlFor="name">Name:</label>
            <input
              autoComplete="on"
              required
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex">
            <label htmlFor="phone">Phone Number:</label>
            <input
              autoComplete="on"
              required
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="on"
              required
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea 
              required 
              name="message" 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit" className="submit">
            أرسل رسالتك
          </button>

          {submitted && (
            <p className="flex" style={{ fontSize: "18px", marginTop: "1.7rem" }}>
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              تم إرسال رسالتك بنجاح عبر WhatsApp 👌
            </p>
          )}
        </motion.form>
        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
