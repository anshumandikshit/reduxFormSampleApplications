import React, { useState } from 'react' ;
import {FormGroup,ControlLabel,FormControl, Form} from 'react-bootstrap' ;
import classes from '../inputRadioBtnsFormComponents/inputRadioBtnsFormComponents.module.css';


const RenderInputField = props =>{

    const [radioBtnsValues,setRadioBtnValues] = useState({
        options: ["A", "B", "C", "D"] 
       });

   let {feedbackIcon,input,label,type,meta} = props ;

   let options = radioBtnsValues.options.map((value,index)=>{
            return(
                // <label key={value}>  <input type={props.type} {...input} value={value} key={index} checked={value === input.value}  onChange ={props.onChangePaymentOption}></input>{value}</label>
                <Form.Check inline 
                type={props.type}
                label={value}
                key={index}
                value={value}
                name="formHorizontalRadios"
                id={index}
                onChange ={props.onChangePaymentOption}
              />
            );
   }) ;
   
   
  let message;
  const validationState = meta.touched && ( meta.error && "error" ) || ( meta.warning && "warning" ) || null;

  if ( meta.touched && ( meta.error || meta.warning ) ) {
      message = <span className="help-block">{ meta.error || meta.warning }</span>;
  }
  console.log(type);
    return(
        
        <div>
            <Form.Group validationstate={ validationState }>
                    <Form.Label>{ label }</Form.Label>
                    {options}
                    <div>
                    {message}
                    </div>
                </Form.Group>
        </div>
)
}


  export default RenderInputField ;