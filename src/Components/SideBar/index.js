import React from 'react';
import profile from '../../images/profile.jpeg';
import {Card} from 'react-bootstrap';
import RoomTwoToneIcon from '@material-ui/icons/RoomTwoTone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './style.css';


export default function sidebar() {
    return (
        <div className = " background-color card shadow ">
           <img className="profilePicture px-3 py-3 mt-2 my-2" src={profile} alt="profilepicture"></img>
           <h4 className="text-color">Pratyusha Raghupatruni</h4>
            <h5 className="text-color">Full Stack Web Developer</h5>
            <h5> <RoomTwoToneIcon />Redmond,WA</h5>
            <br />
            <br />
             <Card className="mx-4 my-1 px-3 py-3">
               <h5><LinkedInIcon color="secondary"/> </h5>
             </Card>
             
        </div>
    )
}
