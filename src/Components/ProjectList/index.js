import React from "react";
import {Row} from 'react-bootstrap';
import Portfolio from "../../Components/Portfolio";
import oasis from '../../images/oasis.png';
import googlebooksearch from '../../images/googlebooksearch.png'
import jobfinder from '../../images/jobfinder.png';
import eatdaburger from '../../images/eatdaburger.png';
import employeedirectory from '../../images/employeedirectory.png';
import brewery from '../../images/brewery.png';
import weatherdashboard from '../../images/weatherdashboard.png';
import dayplanner from '../../images/dayplanner.png';
import codequiz from '../../images/codequiz.png';

import '../../assets/css/style.css';



export default function ProjectList() {
  const projects = [
    {
      id: "GauriKhandke/oasis",
      title: "Oasis (MERN)",
      description:
        "Online journal Application that allows both young and young at heart to write their thoughts, feelings and emotions into a safe, secure and fun journal app. ",
      imageUrl:oasis,
      appUrl: "https://oasis-diary.herokuapp.com",
    },

     {
      id: "PratyushaRaghupatruni/google-books-search",
      title: "Google Book Search (MERN)",
      description:
        "This app allows users to search for their books of interest via the Google Books API and save them in a visual collection for future purchase.",
      imageUrl: googlebooksearch,
      appUrl: "https://pr-google-book-search.herokuapp.com/",
    },

    {
      id: "PratyushaRaghupatruni/employeedirectory",
      title: "Employee Directory (React)",
      description:
        "Employee directory application created using react where user can view all employee data, search employee as well as sort employee by name.",
      imageUrl:employeedirectory,
      appUrl: "https://pratyusharaghupatruni.github.io/employeedirectory/",
    },

    {
      id: "saikitjk/JobFinder",
      title: "Job Finder (Full Stack)",
      description:
        "This is a simple Job Finder application where the user can search for the Jobs with keywords like location,role etc.And also the user can Post a Job ",
      imageUrl: jobfinder,
      appUrl: "https://uw-jobfinder.herokuapp.com/",
    },

       {
      id: "PratyushaRaghupatruni/eat-da-burger ",
      title: "Eat Da Burger (Full stack)",
      description:
        "This is a restaurant app where the users input the names of burgers  and has Devour button. When the user clicks it, the burger will be 'Devoured'",
      imageUrl: eatdaburger,
      appUrl: "https://application-eat-da-burger.herokuapp.com/",
    },

    {
      id: "mavn2/projectone",
      title: "Brewery Finder (Front End)",
      description:
        "This Application connects you to local breweries, making it easy to drink new, fresh, delicious beers without a trip to the bar or bottle shop.",
      imageUrl: brewery,
      appUrl: "https://mavn2.github.io/projectone/",
    },

    {
      id: "PratyushaRaghupatruni/weather-dashboard",
      title: "Weather Dashboard (Front End)",
      description:
        "A weather dashboard application  to find current weather conditions and the future weather outlook for multiple citie",
      imageUrl: weatherdashboard,
      appUrl: "https://pratyusharaghupatruni.github.io/weather-dashboard/",
    },
    {
      id: "PratyushaRaghupatruni/day-planner",
      title: "Day Planner (Front End)",
      description:
        "Create a simple calendar application that allows the user to save events for each hour of the day. ",
      imageUrl: dayplanner,
      appUrl: "https://pratyusharaghupatruni.github.io/day-planner/",
    },
    {
      id: "PratyushaRaghupatruni/code-quiz",
      title: "Code Quiz (Front End)",
      description:
        "A timer-based quiz application that stores high scores client-side.Answering incorrectly results in penality of time",
      imageUrl: codequiz,
      appUrl: "https://pratyusharaghupatruni.github.io/code-quiz/",
    },
  ];
  return (
     <> 
    
         <section id ="portfolio">
           <div className='container'>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
          <div className="row">
            <div className="col-12">
              <h2 className="text-center header-Projects">Projects</h2>
            </div>
           </div> 

          <hr className="line"></hr>
          
            <br></br>
            <br></br>
             
            <Row>
            {projects.map((project) => (
              <Portfolio key={project.id} project={project} />
             ))}
            </Row>
          </div>
          <br></br>
          <br></br>
        </section>
       </>
 
  );
}