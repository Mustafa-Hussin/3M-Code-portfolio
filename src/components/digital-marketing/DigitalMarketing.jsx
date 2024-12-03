import { useState } from "react";
import "./digitalMarketing.css";
import { marketingProjects } from "./marketingProjects";
import { AnimatePresence, motion } from "framer-motion";

const DigitalMarketing = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(marketingProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = marketingProjects.filter((item) => {
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
            setArr(marketingProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          كل المشاريع
        </button>

        <button
          onClick={() => {
            handleClick("social");
          }}
          className={currentActive === "social" ? "active" : null}
        >
          السوشيال ميديا
        </button>

        <button
          onClick={() => {
            handleClick("seo");
          }}
          className={currentActive === "seo" ? "active" : null}
        >
          تحسين محركات البحث
        </button>

        <button
          onClick={() => {
            handleClick("ads");
          }}
          className={currentActive === "ads" ? "active" : null}
        >
          الإعلانات المدفوعة
        </button>

        <button
          onClick={() => {
            handleClick("content");
          }}
          className={currentActive === "content" ? "active" : null}
        >
          التسويق بالمحتوى
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
                      <a href={item.demoLink} target="_blank" rel="noopener noreferrer" className="icon-link"></a>
                      <a href={item.caseStudyLink} target="_blank" rel="noopener noreferrer" className="icon-document"></a>
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

export default DigitalMarketing;
