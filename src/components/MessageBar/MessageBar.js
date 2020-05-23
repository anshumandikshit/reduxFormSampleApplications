import React from "react";
import classes from "./messageBar.module.css";
import Button from "react-bootstrap/Button";

const messageBar = (props) => {

    let messageBarClasses= [classes.MessageWindow,classes.Close] ;
    
    if(props.open){
        
        messageBarClasses= [classes.MessageWindow,classes.Open] ;
    }
  return (
    <React.Fragment>
    
    <button className={classes.MessageButton} onClick={props.closed}>
        <i className="fa fas fa-envelope"></i>
      </button>

    <div className={messageBarClasses.join(" ")}>
    <div className={classes.CloseBtn} onClick={props.closed}><i className="fa fas fa-window-close"></i> </div>
    <div className={classes.MessageBox}>This will be the messageBar</div>
    </div>
    
      
    </React.Fragment>
  );
};

export default messageBar;

// <button className={classes.MessageBar}>
//         <i class="fa fas fa-envelope"></i>
//         </button>
