import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { AiFillEnvironment } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";

import {
  RiSearchEyeLine,
  RiImageAddFill,
  RiMailUnreadFill,
} from "react-icons/ri";

import {
  BsFileEarmarkRichtextFill,
  BsFillBarChartLineFill,
  BsReverseLayoutTextWindowReverse,
} from "react-icons/bs";

import { ToggleMode } from "./index";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menus = [
    { title: "Dashboard", path: "/quotation" },
    {
      title: "Quotation",
      spacing: true,
      icon: <BsFileEarmarkRichtextFill />,
      path: "/",
    },
    { title: "Client", icon: <RiImageAddFill />, path: "/clients" },
    { title: "Products", icon: <BsFillBarChartLineFill />, path: "/products" },
    { title: "Inbox", icon: <RiMailUnreadFill /> },
    {
      title: "Profile",
      spacing: true,
      icon: <RiImageAddFill />,
      path: "/profile",
    },
    {
      title: "Switch to Dark Mode",
      icon: <BsFileEarmarkRichtextFill />,
    },
    {
      title: "Logout",
      icon: <BsReverseLayoutTextWindowReverse />,
      path: "/logout",
    },
  ];

  return (
    <section
      className={`relative h-screen dark:bg-bg-dark shadow-2xl dark:shadow-3xl-dark p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } duration-300 dark:shadow-3xl`}
    >
      <div>
        <FaArrowLeft
          className={`bg-accent-light dark:bg-accent-dark 
        text-slate-900 dark:text-bg-light text-3xl p-2 rounded-full 
        absolute -right-3 top-9 cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
      </div>
      {/* LOGO */}
      <div className="inline-flex">
        <AiFillEnvironment
          className={`text-accent-light dark:text-accent-dark text-4xl rounded-md cursor-pointer block duration-500 float-left mr-2 ${
            open && "rotate-[360deg]"
          }  p-2 bg-slate-300`}
        />
        <h1
          className={`text-text-light dark:text-text-dark origin-left duration-300 font-bold text-2xl flex items-center ${
            !open && "scale-0"
          }`}
        >
          Sales Manager
        </h1>
      </div>

      {/* SEARCH BAR */}
      <div
        className={`flex items-center rounded-md bg-accent-light dark:bg-accent-dark mt-6 py-2 ${
          !open ? " px-2.5" : "px-4"
        }`}
      >
        <RiSearchEyeLine
          className={`text-text-light dark:text-text-dark text-lg block float-left cursor-pointer ${
            open && "mr-2"
          }`}
        />

        <input
          type="text"
          placeholder="Search"
          className={`text-base bg-transparent w-full placeholder:text-text-light 
          dark:placeholder:text-text-dark placeholder:font-medium focus:outline-none ${
            !open && "hidden"
          }`}
        />
      </div>

      {/* MENU ITEM BAR */}
      <ul className="relative pt-2">
        <div
          className={`absolute -right-10 ${open ? "bottom-16" : "bottom-8"}`}
        >
          <ToggleMode />
        </div>
        {menus.map((menu) => (
          <li
            key={menu.title}
            className={`text-text-light dark:text-text-dark text-sm flex 
              items-center gap-x-4 cursor-pointer mt-2 ${
                menu.spacing ? "mt-[2.8rem]" : "mt-3"
              }`}
          >
            <span className="text-2xl block float-left text-accent-light dark:text-accent-dark">
              {menu.icon ? menu.icon : <MdDashboard />}
            </span>
            <Link
              to={menu.path}
              className={`text-base font-medium duration-300 flex-1 hover:bg-accent-light 
                dark:hover:bg-accent-dark p-2 rounded-md ${!open && "hidden"}`}
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
