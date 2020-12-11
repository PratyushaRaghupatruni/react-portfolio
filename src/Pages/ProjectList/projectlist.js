import React from "react";
import Portfolio from "../../Components/Portfolio";

export default function ProjectList() {
  const projects = [
    {
      id: "oasis",
      title: "Oasis",
      description:
        "",
      imageUrl: "../../images/oasis.png",
      appUrl: "https://oasis-diary.herokuapp.com",
    },
    {
      id: "jobfinder",
      title: "Job Finder",
      description:
        "",
      imageUrl: "../../images/jobfinder.png",
      appUrl: "",
    },
    {
      id: "breweryfinder",
      title: "Find A Brewery",
      description:
        "",
      imageUrl: "",
      appUrl: "",
    },
    {
      id: "googlebooksearch",
      title: "Google Book Search",
      description:
        "This app allows users to search for their books of interest via the Google Books API and save them in a visual collection for future purchase.",
      imageUrl: "Coming Soon",
      appUrl: "",
    },
    {
      id: "burgerapp",
      title: "Eat Da Burger",
      description:
        "Eat Da Burger is a restaurant app where burger lovers can order their favorite burger creations and devour them as fast as one click!",
      imageUrl: "../../images/eatdaburger.png",
      appUrl: "",
    },
    {
      id: "fitnesstracker",
      title: "Fitness Tracker",
      description:
        "",
      imageUrl: "../../images/fitnesstracker.png",
      appUrl: "",
    },
    {
      id: "weatherdashboard",
      title: "Weather Dashboard",
      description:
        "",
      imageUrl: "../../images/weatherdashboard.png",
      appUrl: "",
    },
    {
      id: "dayplanner",
      title: "Day Planner",
      description:
        "A weather dashboard application with a powerful search functionality to find the current weather conditions for any city in the world.",
      imageUrl: "../../images/dayplanner.png",
      appUrl: "",
    },
    {
      id: "codequiz",
      title: "Code Quiz",
      description:
        ".",
      imageUrl: "../../images/codequiz.png",
      appUrl: "",
    },
  ];
  return (
  
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <Portfolio key={project .id} project={project} />
          ))}
        </div>
      </div>
 
  );
}
