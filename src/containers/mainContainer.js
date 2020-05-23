import React,{ useState, useEffect } from 'react' ;
import BasicInfoForm from "../components/BasicInfoForm/BasicInfoForm";

import * as formValidator from '../shared/FieldLevelFormValidation' ;

import * as actions from '../store/actions/allActions' ;
import { connect } from 'react-redux';
import classes from "./mainContainer.module.css" ;

import {Container} from 'react-bootstrap'


 const MainComponent = props=>{
   const [openModal ,setToggleModal] =useState(false);
   const [formValues,setFormValues]= useState(null);

   const onSetOpenModal=()=>{
       
       setToggleModal(true) ;
   }

   const onSetCloseModal =() =>{
       setToggleModal(false) ;
   }

   const onHandleSubmitForm = (values)=>{
       setFormValues(JSON.stringify(values)) ;
       props.storeBasicInfo(values) ;
       
   }


   let modalArea = null ;

   if(openModal){
       modalArea = (<div><BasicInfoForm show={openModal} onHandleSubmitForm={(values)=>onHandleSubmitForm(values)} onHide={onSetCloseModal}></BasicInfoForm> </div>);

   }

   let mainArea= null;
   if(props.loading){
       mainArea=<div>loading....</div>
   }

   if(props.basicInfo!==null && !props.loading){
       mainArea=(
        <Container fluid>
        <div >
           {(props.basicInfo!==null) ? (
               props.basicInfo.map(basicInfo=>{
                   return(
                    <div className={classes.box} style={{wordBreak:"break-word"}}>
                            <h1>{basicInfo.username}</h1>
                    </div>
                   )
                   
               })
           ) :null }
       </div>
        </Container>
       )
   }

    return (
        <div>
           <button onClick={onSetOpenModal}>
           <i className="fa fa-plus" aria-hidden="true"></i>
           </button>

           <button onClick={onSetCloseModal}>
           <i className="fa fa-minus" aria-hidden="true" ></i>
           </button>
            <div>
            {modalArea}
            </div>
            {mainArea}
           
        </div>
    )
}


const mapStateToProps = state => {
    return {
      loading: state.basicInfoReducer.loading,
      error: state.basicInfoReducer.error,
      basicInfo: state.basicInfoReducer.basicInfo
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      storeBasicInfo: (newBasicInfo) =>
        dispatch(actions.storeBasiInfo(newBasicInfo)),
    };
  };


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainComponent) ;