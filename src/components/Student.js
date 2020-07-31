import React, { useState } from "react";
import { Collapse } from "react-collapse";
import findAverage from "../helpers/findAverage";
import Styles from "../styles/StudentStyles";

const Student = ({ students }) => {
  const [isOpened, setIsOpened] = useState(false);
  const collapse = () => {
    setIsOpened(!isOpened);
  };
  return (
    <Styles>
      <div className="student-container">
        <img src={students.pic} alt={students.firstName} />
        <div className="student-details">
          <h1>
            {students.firstName} {students.lastName}
          </h1>
          <p>Email: {students.email}</p>
          <p>Company: {students.company}</p>
          <p>Skill: {students.skill}</p>
          <p>Average: {findAverage(students.grades)}</p>
          <Collapse isOpened={isOpened}>
            {students.grades.map((g, index) => (
              <ul key={index} className="grades-list">
                <li>
                  Test {index + 1}: {g}%
                </li>
              </ul>
            ))}
          </Collapse>
        </div>
      </div>
      <button onClick={collapse}>+</button>
    </Styles>
  );
};

export default Student;
