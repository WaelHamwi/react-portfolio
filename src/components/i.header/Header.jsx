import React, { useEffect, useState } from "react";
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [modeToggle, setModeToggle] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (modeToggle === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [modeToggle]);
  return (
    <header className="flex">
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="show-menu icon-menu flex"
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#hero">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#publications">Publications</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact-me">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            modeToggle === "dark" ? "light" : "dark"
          );
          setModeToggle(localStorage.getItem("currentMode"));
        }}
        className="toggle-mode flex"
      >
        {modeToggle === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              {" "}
              <button
                className="icon-cross"
                onClick={() => setShowModal(false)}
              />
            </li>
            <li>
              <a href="#hero">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#publications">Publications</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact-me">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
export default Header;
