import React from "react";
import {Container,Row} from 'react-bootstrap';
import Portfolio from "../../Components/Portfolio";


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
    // {
    //   id: "mavn2/projectone",
    //   title: "Brewery Finder",
    //   description:
    //     "Connects you to local breweries, making it easy to drink new, fresh, delicious beers without a trip to the bar or bottle shop.",
    //   imageUrl: "Comming soon",
    //   appUrl: "https://mavn2.github.io/projectone/",
    // },
    // {
    //   id: "googlebooksearch",
    //   title: "Google Book Search",
    //   description:
    //     "This app allows users to search for their books of interest via the Google Books API and save them in a visual collection for future purchase.",
    //   imageUrl: "Coming Soon",
    //   appUrl: "",
    // },
    {
      id: "PratyushaRaghupatruni/eat-da-burger ",
      title: "Eat Da Burger",
      description:
        "This is a restaurant app where the users input the names of burgers  and has Devour button. When the user clicks it, the burger will be 'Devoured'",
      imageUrl: "../../images/eatdaburger.png",
      appUrl: "",
    },
    {
      id: "PratyushaRaghupatruni/fitness-tracker",
      title: "Fitness Tracker",
      description:
        "Fitness Tracker allows the user to add exercises to a previous or new workout and view stats for multiple workouts.",
      imageUrl: "../../images/fitnesstracker.png",
      appUrl: "https://pr-fitness-tracker.herokuapp.com/",
    },
    {
      id: "PratyushaRaghupatruni/weather-dashboard",
      title: "Weather Dashboard",
      description:
        "A weather dashboard application  to find current weather conditions and the future weather outlook for multiple citie",
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
      id: "PratyushaRaghupatruni/code-quiz",
      title: "Code Quiz",
      description:
        "A timer-based quiz application that stores high scores client-side.Answering incorrectly results in penality of time",
      imageUrl: "../../images/codequiz.png",
      appUrl: "https://pratyusharaghupatruni.github.io/code-quiz/",
    },
  ];
  return (
     <>
         
          <Container>
            <Row>
          {projects.map((project) => (
            <Portfolio key={project.id} project={project} />
        ))}
            </Row>
          </Container>
        
       </>
 
  );
}
