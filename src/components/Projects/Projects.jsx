import React from "react";
import ProjectCard from "./ProjectCards";
import theme from "../../assets/theme.png"
import todo from "../../assets/todo.png"
import currency from "../../assets/currency.png"

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-slate-950 dark:text-white font-bold ">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
        <ProjectCard
          bannerImg={currency}
          title="Currency Converter"
          main="A real-time currency converter built with React, fetching live exchange rates using a Currency API to provide accurate conversion rates."
        />
        <ProjectCard
          bannerImg={todo}
          title="TODO App"
          main="A feature-rich TODO list app created using React, allowing users to add, delete, and manage tasks efficiently, using localStorage to persist tasks."
        />
        <ProjectCard
          bannerImg={theme}
          title="Theme Switcher App"
          main="A React-based app that enables users to switch between light and dark themes, using Context API for global state management and state persistence for seamless UX."
        />
      </div>
    </div>
  );
};

export default Projects;
