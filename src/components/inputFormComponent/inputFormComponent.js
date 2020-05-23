
import React from 'react' ;
import {FormGroup,ControlLabel,FormControl, Form} from 'react-bootstrap' ;
import classes from '../inputFormComponent/inputFormComponent.module.css';


const renderInputField = props =>{

   let {feedbackIcon,input,label,type,meta} = props ;
   
   
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
                    <Form.Control { ...input } value={input.value}
                                type={ type } className={validationState=="error"? classes.invalid:"valid"}
                                { ...props } />
                    { feedbackIcon ? <FormControl.Feedback>{ feedbackIcon }</FormControl.Feedback> : null }
                    <div style={{color:"red"}}>
                    { message }
                    </div>
                </Form.Group>
        </div>
)
}


  export default renderInputField ;