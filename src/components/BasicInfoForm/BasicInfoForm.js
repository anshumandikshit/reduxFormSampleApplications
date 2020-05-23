import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as Validators from "../../shared/FieldLevelFormValidation";
import renderField from "../inputFormComponent/inputFormComponent";
import * as actions from "../../store/actions/allActions";

import renderRadioFields from "../inputFormComponent/inputRadioBtnsFormComponents/inputRadioBtnsFormComponents";
import renderFileFields from "../inputFormComponent/inputFileBtnComponent/inputFileComponent"

const BasicInfoForm = (props) => {
  const [paymentOptionValue, setPaymentOptionValue] = useState("something");

  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    valid,
    initialValues,
  } = props;
  const onSubitForm = (values) => {
    console.log(values);

    setTimeout(() => {
      props.onHide();
      props.onHandleSubmitForm(values);
    }, 2000);
  };

  const onChangePaymentOption = (event) => {
    console.log("changing the radio btns", event.target.value);
    setPaymentOptionValue(event.target.value);
  };

  const attachPaymentDiv = (value) => {
    switch (value) {
      case "A":
        return(<div>div for A</div>) ;
        break;
      case "B":
        return(<div>div for B</div>) ;
        break;
      case "C":
        return(<div>div for c</div>) ;
        break;
      case "D":
        return(<div>div for D</div>) ;
        break;
      default:
        return(null) ;
    }
  };

  let paymentDetailsDiv = attachPaymentDiv(paymentOptionValue);

  console.log("initial values of the forms",paymentOptionValue) ;
  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sample Form
        </Modal.Title>

        <Button
          type="button"
          onClick={() => props.onLoadBasicInfoFirstElement()}
        >
          Load Account
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={handleSubmit(onSubitForm)}
          initialvalues={props.initialValues}
        >
          <Field
            name="username"
            type="text"
            component={renderField}
            label="Username"
            validate={[
              Validators.required,
              Validators.maxLength15,
              Validators.minLength2,
            ]}
            warn={Validators.alphaNumeric}
          />
          <Field
            name="email"
            type="email"
            component={renderField}
            label="Email"
            validate={Validators.email}
            warn={Validators.aol}
          />
          <Field
            name="age"
            type="number"
            component={renderField}
            label="Age"
            validate={[
              Validators.required,
              Validators.number,
              Validators.minValue13,
            ]}
            warn={Validators.tooYoung}
          />
          <Field
            name="phone"
            type="number"
            component={renderField}
            label="Phone number"
            validate={[Validators.required, Validators.phoneNumber]}
          />
          <Field
            type="radio"
            name="paymentType"
            component={renderRadioFields}
            label="Payments"
            onChangePaymentOption={(event) => onChangePaymentOption(event)}
            
          />
          <div>
          {paymentDetailsDiv}
          </div>

          {<Field
            name="uploadFile"
            type="file"
            component={renderFileFields}
            label="UploadFile"
            validate={[Validators.required,Validators.maxSize5Mb]}
          />}
          <div>
            <div style={{ float: "right" }}>
              <Button
                style={{ margin: "1px" }}
                type="submit"
                disabled={submitting || !valid}
              >
                Submit
              </Button>
              <Button
                style={{ margin: "1px" }}
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Clear Values
              </Button>
            </div>
          </div>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.basicInfoReducer.loading,
    error: state.basicInfoReducer.error,
    basicInfo: state.basicInfoReducer.basicInfo,
    initialValues: state.basicInfoReducer.basicInfoFirstElement,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeBasicInfo: (newBasicInfo) =>
      dispatch(actions.storeBasiInfo(newBasicInfo)),

    onLoadBasicInfoFirstElement: () =>
      dispatch(actions.loadBasicInfoFirstElement()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "Basic",
    enableReinitialize: true,
  })(BasicInfoForm)
);
