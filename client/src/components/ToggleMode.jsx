import React from "react";
import { useTheme } from "../contexts/themeContext";
import { IoSunnySharp } from "react-icons/io5";
import { RiMoonClearFill } from "react-icons/ri";

const ToggleMode = () => {
  const { mode, toggleTheme } = useTheme();

  const toggleSwitch = () => {
    toggleTheme();
  };

  return (
    <div
      onClick={toggleSwitch}
      style={{ cursor: "pointer" }}
      className="flex justify-center items-center p-2
     rounded-full bg-accent-light dark:bg-accent-dark"
    >
      {mode === "dark" ? (
        <IoSunnySharp className="text-text-dark text-lg" />
      ) : (
        <RiMoonClearFill className="text-text-light text-lg" />
      )}
    </div>
  );
};

export default ToggleMode;
