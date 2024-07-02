import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { publications } from "./myPublication";

const Publication = () => {
  const [current, setCurrent] = useState(0);

  const nextPublication = () => {
    setCurrent((prev) => (prev === publications.length - 1 ? 0 : prev + 1));
  };

  const prevPublication = () => {
    setCurrent((prev) => (prev === 0 ? publications.length - 1 : prev - 1));
  };

  return (
    <>
      <h2 className="title" style={{textAlign:'center'}}>publications and certifications</h2>
      <div className="carousel-container" id="publications">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="carousel-slide"
          >
            <div className="carousel-content">
              <img
                src={publications[current].image}
                alt={publications[current].title}
                className="carousel-image"
              />
              <h2 className="carousel-title">{publications[current].title}</h2>
              <p className="carousel-description">
                {publications[current].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevPublication}
          className="carousel-button prev-button"
        >
          &lt;
        </button>
        <button
          onClick={nextPublication}
          className="carousel-button next-button"
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default Publication;
