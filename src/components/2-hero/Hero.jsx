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
          Software designer, founder, entrepreneur.
        </motion.h1>

        <p className="sub-title">
        I’m Mustafa Hussein , a software designer and entrepreneur based in Giza Egypt 
          City. I’m the founder and CEO of 3M Code Software Solutions , where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>

        <div className="all-icons flex">
          <a href="https://twitter.com/3MCodeSolutions" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-twitter"></div>
          </a>
          <a href="https://instagram.com/3mcodesolutions" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-instagram"></div>
          </a>
          <a href="https://github.com/3MCodeSolutions" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-github"></div>
          </a>
          <a href="https://linkedin.com/company/3mcodesolutions" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-linkedin"></div>
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
