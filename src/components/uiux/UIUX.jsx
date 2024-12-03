import { useState } from "react";
import "./uiux.css";
import { uiuxProjects } from "./uiuxProjects";
import { AnimatePresence, motion } from "framer-motion";

const UIUX = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(uiuxProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = uiuxProjects.filter((item) => {
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
            setArr(uiuxProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          كل المشاريع
        </button>

        <button
          onClick={() => {
            handleClick("mobile");
          }}
          className={currentActive === "mobile" ? "active" : null}
        >
          تطبيقات موبايل
        </button>

        <button
          onClick={() => {
            handleClick("web");
          }}
          className={currentActive === "web" ? "active" : null}
        >
          مواقع ويب
        </button>

        <button
          onClick={() => {
            handleClick("dashboard");
          }}
          className={currentActive === "dashboard" ? "active" : null}
        >
          لوحات تحكم
        </button>

        <button
          onClick={() => {
            handleClick("brand");
          }}
          className={currentActive === "brand" ? "active" : null}
        >
          هوية بصرية
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
                      <a href={item.behanceLink} target="_blank" rel="noopener noreferrer" className="icon-behance"></a>
                      <a href={item.dribbbleLink} target="_blank" rel="noopener noreferrer" className="icon-dribbble"></a>
                    </div>

                    <a className="link flex" href={item.behanceLink}>
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

export default UIUX;
