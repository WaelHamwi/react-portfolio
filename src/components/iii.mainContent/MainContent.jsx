import React, { useState } from "react";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const MainContent = () => {
  const [filteredProjects, setFilteredProjects] = useState(myProjects);
  const [currentActivate, setActivate] = useState("all");

  const filterProjectsByCategory = (category) => {
    const filtered = myProjects.filter((item) => {
      return item.category.includes(category);
    });
    setFilteredProjects(filtered);
  };

  const toggleZoom = (index) => {
    const updatedProjects = [...filteredProjects];
    updatedProjects[index].zoomed = !updatedProjects[index].zoomed;
    setFilteredProjects(updatedProjects);
  };

  return (
    <main className="flex" id="projects">
      <section className="left-main flex">
        <button
          className={currentActivate === "all" ? "active" : null}
          onClick={() => {
            setFilteredProjects(myProjects);
            setActivate("all");
          }}
        >
          All
        </button>
        <button
          className={currentActivate === "laravel" ? "active" : null}
          onClick={() => {
            filterProjectsByCategory("laravel");
            setActivate("laravel");
          }}
        >
          Laravel
        </button>
        <button
          className={currentActivate === "wordpress" ? "active" : null}
          onClick={() => {
            filterProjectsByCategory("wordpress");
            setActivate("wordpress");
          }}
        >
          Wordpress
        </button>
        <button
          className={currentActivate === "ai" ? "active" : null}
          onClick={() => {
            filterProjectsByCategory("ai");
            setActivate("ai");
          }}
        >
          Web/AI
        </button>
        <button
          className={currentActivate === "react" ? "active" : null}
          onClick={() => {
            filterProjectsByCategory("react");
            setActivate("react");
          }}
        >
          React
        </button>
        <button
          className={currentActivate === "ajax" ? "active" : null}
          onClick={() => {
            filterProjectsByCategory("ajax");
            setActivate("ajax");
          }}
        >
          Ajax
        </button>
        <button
          className={currentActivate === "dataMining" ? "active" : null}
          onClick={() => {
            filterProjectsByCategory("dataMining");
            setActivate("dataMining");
          }}
        >
          Data Mining
        </button>
        <button
          className={currentActivate === "SASS" ? "active" : null}
          onClick={() => {
            filterProjectsByCategory("sass");
            setActivate("SASS");
          }}
        >
          sass
        </button>
        <button
          className={currentActivate === "tailwindcss" ? "active" : null}
          onClick={() => {
            filterProjectsByCategory("tailwindcss");
            setActivate("tailwindcss");
          }}
        >
          tailwindcss
        </button>
        <button
          className={currentActivate === "typescript" ? "active" : null}
          onClick={() => {
            filterProjectsByCategory("typescript");
            setActivate("typescript");
          }}
        >
          next/
          Typescript js
        </button>
        <button
          className={currentActivate === "Nodejs" ? "active" : null}
          onClick={() => {
            filterProjectsByCategory("Nodejs");
            setActivate("Nodejs");
          }}
        >
          next/
          NodeJs js
        </button>
        <button
          className={currentActivate === "SEO" ? "active" : null}
          onClick={() => {
            filterProjectsByCategory("SEO");
            setActivate("SEO");
          }}
        >
          SEO
        </button>
        <button
          className={currentActivate === "Filament" ? "active" : null}
          onClick={() => {
            filterProjectsByCategory("Filament");
            setActivate("Filament");
          }}
        >
          Filament
        </button>
        <button
          className={currentActivate === "nextjs" ? "active" : null}
          onClick={() => {
            filterProjectsByCategory("nextjs");
            setActivate("nextjs");
          }}
        >
          Next.js
        </button>
      </section>
      <section className="right-main flex">
        <AnimatePresence>
          {filteredProjects.map((item,index) => {
            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                key={item.item}
                className={`card ${item.zoomed ? "zoomed" : ""}`}
                onClick={() => toggleZoom(index)}
              >
                <img src={item.imgPath} alt={item.projectTitle} />
                <div className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="subtitle">{item.description}</p>
                  {item.note && (
                    <p className="note">{item.note}</p>
                  )}
                  <div className="flex card-icons">
                    <div className="flex first-icons">
                      <a href={item.iconLink} className={item.linkClass}></a>
                      <a className={item.iconGithub} href={item.githubLink}></a>
                    </div>
                    {item.demo && (
                      <a className="demo flex" href={item.demo}>
                        demo
                        <span className="icon-arrow-right"></span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default MainContent;