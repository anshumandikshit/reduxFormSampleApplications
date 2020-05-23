import React from "react";


import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import classes from "../GoalSheetTabular/goalSheetTabular.module.css";

const goalSheetTabular = (props) => {
  let goals = props.dummyGoals;
  let mobileOnly = props.mobileOnly;
  let tableData = goals.map((goal) => {
    return (
      <tr key={goal.id}>
        <td>
          <Form.Check type="checkbox" />
        </td>
        <td style={{ width: "500px", wordBreak: "break-word" }}>{goal.goal}</td>
       { (mobileOnly===false)?
        (
          <td style={{ width: "500px" }}>
            <Form.Group style={{ marginBottom: "0px" }}>
              <Form.Control type="textarea" />
            </Form.Group>
          </td>
        ):null}
        <td>
          <Form.Check type="checkbox" />
        </td>
      </tr>
    );
  });
  return (
    <React.Fragment>
      <div className="table-responsive" style={{ width: "inherit" }}>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Status</th>
              <th>Goals</th>
              {(mobileOnly===false)?<th>Notes</th>:null}
              
              <th>Public</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </Table>

        
      </div>
      <div >
      <button className={classes.UpdateGoalBtn}>Update Goals</button>
      </div>
    </React.Fragment>
  );
};

export default goalSheetTabular;
