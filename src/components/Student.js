import React from "react";
import findAverage from "../helpers/findAverage";
import Styles from "../styles/StudentStyles";

const Contact = ({ students }) => {
  return (
    <Styles>
      {students &&
        students.map((s, index) => (
          <div key={index} className="student-container">
            <img src={s.pic} alt={s.firstName} />
            <div className="student-details">
              <h1>
                {s.firstName} {s.lastName}
              </h1>
              <p>Email: {s.email}</p>
              <p>Company: {s.company}</p>
              <p>Skill: {s.skill}</p>
              <p>Average: {findAverage(s.grades)}</p>
            </div>
          </div>
        ))}
    </Styles>
  );
};

export default Contact;
