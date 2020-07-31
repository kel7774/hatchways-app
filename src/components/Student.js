import React, { useState } from "react";
import Collapsible from "../components/Collapsible";
import findAverage from "../helpers/findAverage";
import Styles from "../styles/StudentStyles";

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const Student = ({ students }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [tags, setTags] = useState([]);

  const collapse = () => {
    setIsOpened(!isOpened);
  };

  const handleDelete = (i) => {
    const deleted = tags.filter((tag, index) => index !== i);
    setTags(deleted);
  };

  const handleAddition = (tag, i) => {
    setTags([...tags, tag]);
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
          <Collapsible
            students={students}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            isOpened={isOpened}
            tags={tags}
          />
        </div>
      </div>
      <button onClick={collapse}>+</button>
    </Styles>
  );
};

export default Student;
