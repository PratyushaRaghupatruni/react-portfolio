import React from 'react';
import profile from '../../images/profile.jpeg';
import clipart from '../../images/clipart.png';
import {Card} from 'react-bootstrap';
import RoomTwoToneIcon from '@material-ui/icons/RoomTwoTone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import PhoneInTalkTwoToneIcon from '@material-ui/icons/PhoneInTalkTwoTone';
import './style.css';


export default function sidebar() {
    return (
        <div className = " background-color card shadow py-1 px-1">
           <img className="profilePicture px-3 py-3 mt-2 my-2" src={profile} alt="profilepicture"></img>
           <h4 className="text-color">Pratyusha Raghupatruni</h4>
             
            <h5 className="text-color">Full Stack Web Developer</h5>
      
            <h5> <RoomTwoToneIcon />Redmond,WA</h5>
            <br />
            <br />
            <h6><GitHubIcon color="primary" /> <a href="https://github.com/PratyushaRaghupatruni">Github</a> </h6>
            <h6><LinkedInIcon color="primary"/><a href="https://www.linkedin.com/in/pratyusha-raghupatruni-96a35832/"> Linkedin</a> </h6>
            <h6>< EmailTwoToneIcon color="primary"/><a href="mailto:pratyusha.raghupatruni@gmail.com"> Email</a> </h6>
              <h6><PhoneInTalkTwoToneIcon  color="primary"/> 4258983432 </h6>
          <br />
           <br />
             <h6>  <img className="clipart" src={clipart} alt="resume-clipart"></img>
              <a href = "https://docs.google.com/document/d/10B8XLsG32NMiA7ZvEqN4rH3jcebooHYqEGTxERoeVEU/edit  "> Resume </a> 
            </h6>

        </div>
    )
}
