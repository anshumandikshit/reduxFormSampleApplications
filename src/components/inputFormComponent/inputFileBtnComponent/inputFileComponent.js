
import React from 'react' ;
import {FormGroup,ControlLabel,FormControl, Form} from 'react-bootstrap' ;
import classes from '../inputFileBtnComponent/inputFileComponent.module.css';


const renderInputField = props =>{

   let {feedbackIcon,input,label,type,meta} = props ;
   
   let inputValue=null ;
  let message;
  const validationState = meta.touched && ( meta.error && "error" ) || ( meta.warning && "warning" ) || null;

  if ( meta.touched && ( meta.error || meta.warning ) ) {
      message = <span className="help-block">{ meta.error || meta.warning }</span>;
  }

 const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

 const onFileChange = async (delegate,e) => {
     e.preventDefault() ;
  
    const targetFile = e.target.files[0]
    if (targetFile) {
      const val = await getBase64(targetFile)
      delegate(val) ;
      
    } else {
        delegate(null)
    }
  }
 const onChange =(e)=> {
    const { input: { onChange } } =props ;
    onChange(e.target.files[0]) ;
  }

  const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

  console.log(type);
    return(
        
        <div>
            <Form.Group validationstate={ validationState }>
            <input
            type="file"
            {...input}
            onChange={(e)=>onFileChange(input.onChange,e)}
            onBlur={(e)=>onFileChange(input.onBlur,e)}
            value={inputValue}
            />
            </Form.Group>
            <div style={{color:"red"}}>
            {message}
            </div>
        </div>
)
}


  export default renderInputField ;

  
     