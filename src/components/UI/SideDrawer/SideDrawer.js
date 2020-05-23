import React from 'react';
import classes from './sidedrawer.module.css';
import Backdrop from '../BackDrop/BackDrop';

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <nav className={classes.NavItems}>
                  All Navigation Items 
                </nav>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer ;