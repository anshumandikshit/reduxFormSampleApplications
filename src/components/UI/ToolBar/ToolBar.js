import React from "react";
import classes from "./Toolbar.module.css";

const toolBar = (props) => {
  return (
    <header className={classes.Toolbar}>
    <div >
    <div onClick={props.drawerToggleClicked} style={{display:"inline-block" ,cursor:"pointer"}}><i className="fa fas fa-bars"></i></div>
    <div className={classes.Logo}>Profile Logo</div>
    </div>
      
    
      <nav className={classes.DesktopOnly}>Navigation Items</nav>
    </header>
  );
};

export default toolBar;
