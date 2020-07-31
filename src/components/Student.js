import React, { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { Collapse } from "react-collapse";
import findAverage from "../helpers/findAverage";
import Styles from "../styles/StudentStyles";

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const Student = ({ students }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [tags, setTags] = useState(["react"]);

  const collapse = () => {
    setIsOpened(!isOpened);
  };

  const handleDelete = (i) => {
    const deleted = tags.filter((tag, index) => index !== i);
    setTags(deleted);
  };

  const handleAddition = (tag) => {
    setTags(tags.push(tag));
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
              <div>
                <ul key={index} className="grades-list">
                  <li>
                    Test {index + 1}: {g}%
                  </li>
                </ul>
              </div>
            ))}
            <ReactTags
              tags={tags}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              draggable={false}
              delimiters={delimiters}
            />
          </Collapse>
        </div>
      </div>
      <button onClick={collapse}>+</button>
    </Styles>
  );
};

export default Student;
