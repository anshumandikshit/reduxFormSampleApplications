import React, { useState } from "react";
import classes from './landingpage.module.css' ;
import "aos/dist/aos.css";

const landingPage =(props) =>{

    let landingPageClass= [classes.LandingPage,classes.Close] ;
    if(props.open){
        landingPageClass =  [classes.LandingPage,classes.Open] ;
    }

    return(
        <React.Fragment>
        <div className={landingPageClass.join(" ")}>
        <div data-aos="zoom-in" className="d-flex flex-column container justify-content-center" style={{color: "white",height:"500px",width:"80%"}}>
        <div className={classes.WelcomeNote}>
        Welcome to Redux form samples
        </div>

        <div>
        <button className={classes.ExploreBtn} onClick={props.removed}>Explore !!!</button>
        </div>
       
        </div>
        
        </div>
        </React.Fragment>
    )
}


export default landingPage ;