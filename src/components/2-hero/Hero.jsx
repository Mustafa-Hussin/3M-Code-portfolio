import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Software Engineer ,
           Founder and Entrepreneur.
        </motion.h1>

        <p className="sub-title">
           I am Mostafa Hussein, a
          software engineer and entrepreneur based in Giza, Egypt. I am the
          founder and CEO of 3M Code Software Solutions, where we develop
          technologies, digital marketing and after-sales service that enable
          people and businesses to explore brands with clear vision.
        </p>

        <div className="all-icons flex">
          <a
            href="https://x.com/3mcode_Software"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-twitter"></div>
          </a>
          <a
            href="https://www.instagram.com/3mcode_software_solutions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-instagram"></div>
          </a>
          <a
            href="https://www.linkedin.com/company/3m-code"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-linkedin"></div>
          </a>
          <a
            href="https://github.com/3mcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-github"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
