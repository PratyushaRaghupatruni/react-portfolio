import React from "react";
import {Container,Row} from 'react-bootstrap';
import Portfolio from "../../Components/Portfolio";
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';

export default function ProjectList() {
  const projects = [
    {
      id: "GauriKhandke/oasis",
      title: "Oasis",
      description:
        "Online journal Application that allows both young and young at heart to write their thoughts, feelings and emotions into a safe, secure and fun journal app. ",
      imageUrl: "../../images/oasis.png",
      appUrl: "https://oasis-diary.herokuapp.com",
    },
    {
      id: "saikitjk/JobFinder",
      title: "Job Finder",
      description:
        "This is a simple Job Finder application where the user can search for the Jobs with keywords like location,role etc.And also the user can Post a Job ",
      imageUrl: "../../images/jobfinder.png",
      appUrl: "https://uw-jobfinder.herokuapp.com/",
    },
    {
      id: "mavn2/projectone",
      title: "Brewery Finder",
      description:
        "Connects you to local breweries, making it easy to drink new, fresh, delicious beers without a trip to the bar or bottle shop.",
      imageUrl: "Comming soon",
      appUrl: "https://mavn2.github.io/projectone/",
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
      id: "PratyushaRaghupatruni/eat-da-burger ",
      title: "Eat Da Burger",
      description:
        "Eat Da Burger is a restaurant app where the users input the names of burgers they'd like to eat and has Devour button. When the user clicks it, the burger will move to the right side of the page as 'Devoured'",
      imageUrl: "../../images/eatdaburger.png",
      appUrl: "",
    },
    {
      id: "PratyushaRaghupatruni/fitness-tracker",
      title: "Fitness Tracker",
      description:
        "A consumer will reach their fitness goals more quickly when they track their workout progress.It allows user to add exercises to a previous or new workout and view stats for multiple workouts.",
      imageUrl: "../../images/fitnesstracker.png",
      appUrl: "https://pr-fitness-tracker.herokuapp.com/",
    },
    {
      id: "PratyushaRaghupatruni/weather-dashboard",
      title: "Weather Dashboard",
      description:
        "Built a weather dashboard application with search functionality to find current weather conditions and the future weather outlook for multiple citie",
      imageUrl: "../../images/weatherdashboard.png",
      appUrl: "https://pratyusharaghupatruni.github.io/weather-dashboard/",
    },
    {
      id: "PratyushaRaghupatruni/day-planner",
      title: "Day Planner",
      description:
        "Create a simple calendar application that allows the user to save events for each hour of the day. ",
      imageUrl: "../../images/dayplanner.png",
      appUrl: "",
    },
    {
      id: "",
      title: "Code Quiz",
      description:
        "A timer-based quiz application that stores high scores client-side.",
      imageUrl: "../../images/codequiz.png",
      appUrl: "https://pratyusharaghupatruni.github.io/code-quiz/",
    },
  ];
  return (
  
     <>
          <Nav />
          <Container>
            <Row>
          {projects.map((project) => (
            <Portfolio key={project .id} project={project} />
        ))}
            </Row>
          </Container>
         <Footer />
       </>
 
  );
}
