import React, { useState } from "react";

import GoalSheetTabular from "../../components/GoalSheet/GoalSheetTabular/goalSheetTabular";
import classes from "./goalSheet.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "aos/dist/aos.css";
import Form from "react-bootstrap/Form";

const GoalSheet = (props) => {
  const goals = [
    {
      id: 1,
      goal:
        "some goals have to be written here to have a responsive layout for the goal sections ",
      goalNotes: "goalNotes1",
    },
    {
      id: 2,
      goal: "goal2",
      goalNotes: "goalNotes2",
    },

    {
      id: 3,
      goal: "goal3",
      goalNotes: "goalNotes3",
    },

    {
      id: 4,
      goal: "goal4",
      goalNotes: "goalNotes",
    },

    {
      id: 5,
      goal: "goal5",
      goalNotes: "goalNotes5",
    },

    {
      id: 6,
      goal: "goal6",
      goalNotes: "goalNotes6",
    },

    {
      id: 7,
      goal: "goal7",
      goalNotes: "goalNotes7",
    },
  ];
  const [startDate, setStartDate] = useState(new Date());
  const [dummyGoals, setDummyGoals] = useState(goals);
  return (
    <React.Fragment>
      <div data-aos="fade-in" className="container justify-content-center">
        <div className={classes.DatePickerBox}>
          <span>Select Date : </span>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
        </div>

        <div
          className="d-flex container"
          style={{margin:"10px 0px" }}
        >
          <div className="d-flex flex-column">
            <div className={classes.DesktopOnly}>
              <GoalSheetTabular
                mobileOnly={false}
                dummyGoals={dummyGoals}
              ></GoalSheetTabular>
            </div>
            <div className={classes.MobileOnly}>
              <GoalSheetTabular
                mobileOnly={true}
                dummyGoals={dummyGoals}
              ></GoalSheetTabular>
            </div>
            <div>
              <span>
                <Form>
                  <Form.Group>
                    <Form.Control as="select">
                      <option>prevGoals1</option>
                      <option>prevGoals2</option>
                      <option>prevGoals3</option>
                      <option>prevGoals4</option>
                      <option>prevGoals5</option>
                    </Form.Control>
                  </Form.Group>
                  <button type="submit" className={classes.DoTodayBtn}>
                    DoToday !
                  </button>
                </Form>
              </span>
            </div>
            <div>
              <div>
                <Form>
                  <Form.Group >
                    <Form.Label>Add Goals :</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                  <button type="submit" className={classes.DoTodayBtn}>
                    Add Goals
                  </button>
                </Form>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GoalSheet;
