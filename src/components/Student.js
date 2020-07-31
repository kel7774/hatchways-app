import React from "react";
import findAverage from "../helpers/findAverage";
import Styles from "../styles/StudentStyles";

const Student = ({ students }) => {
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
        </div>
      </div>
    </Styles>
  );
};

export default Student;
