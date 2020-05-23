import React, { useState } from "react";
import { connect } from "react-redux";

import classes from "../Layout/layout.module.css";
import Toolbar from "../../components/UI/ToolBar/ToolBar";
import SideDrawer from "../../components/UI/SideDrawer/SideDrawer";
import MessageBar from "../../components/MessageBar/MessageBar";
import LandingPage from '../../components/UI/LandingPage/LandingPage' ;
const Layout = (props) => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
  const [messageBarIsVisible, setMessageBarIsVisible] = useState(false);
  const [landingPageStatus, setLandingPageStatus] = useState(false);

  

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  const messageBarClosedHAndler=()=>{
     
      setMessageBarIsVisible(!messageBarIsVisible);
  }

  const landingPageRemoveHandler = () => {
    setLandingPageStatus(true);
  };

   let  goalSheetArea= null;

  if(landingPageStatus){
     goalSheetArea =(
        <React.Fragment>
        <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
        <SideDrawer open={sideDrawerIsVisible} closed={sideDrawerClosedHandler} />
        <MessageBar open={messageBarIsVisible} closed={messageBarClosedHAndler} />
        <main className={classes.Content}>{props.children}</main>
        </React.Fragment>
        ) ;
  }

  


  return (
    <React.Fragment>
    <LandingPage open={landingPageStatus} removed={landingPageRemoveHandler}></LandingPage>

    {goalSheetArea}
      
    </React.Fragment>
  );
};

export default Layout;
