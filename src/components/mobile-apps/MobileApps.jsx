import { useState } from "react";
import "./mobileApps.css";
import { mobileProjects } from "./mobileProjects";
import { AnimatePresence, motion } from "framer-motion";

const MobileApps = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(mobileProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = mobileProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(mobileProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          كل التطبيقات
        </button>

        <button
          onClick={() => {
            handleClick("android");
          }}
          className={currentActive === "android" ? "active" : null}
        >
          Android تطبيقات
        </button>

        <button
          onClick={() => {
            handleClick("ios");
          }}
          className={currentActive === "ios" ? "active" : null}
        >
          iOS تطبيقات
        </button>

        <button
          onClick={() => {
            handleClick("flutter");
          }}
          className={currentActive === "flutter" ? "active" : null}
        >
          Flutter تطبيقات
        </button>

        <button
          onClick={() => {
            handleClick("react-native");
          }}
          className={currentActive === "react-native" ? "active" : null}
        >
          React Native تطبيقات
        </button>
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="card"
              >
                <img width={266} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.description}</p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a href={item.playStore} target="_blank" rel="noopener noreferrer" className="icon-android"></a>
                      <a href={item.appStore} target="_blank" rel="noopener noreferrer" className="icon-apple"></a>
                    </div>

                    <a className="link flex" href={item.demoLink}>
                      المزيد
                      <span style={{ alignSelf: "end" }} className="icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default MobileApps;
