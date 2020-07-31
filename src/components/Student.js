import React, { useState, useEffect } from "react";
import Collapsible from "../components/Collapsible";
import findAverage from "../helpers/findAverage";
import Styles from "../styles/StudentStyles";

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const Student = ({ students, update }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [tags, setTags] = useState([]);
  console.log("tags from student:", tags);

  const collapse = () => {
    setIsOpened(!isOpened);
  };

  const handleDelete = (i) => {
    const deleted = tags.filter((tag, index) => index !== i);
    // setTags(deleted);
    update(deleted);
  };

  const handleAddition = (tag, i) => {
    let result = tags;
    result.push(tag);
    // setTags(result);
    update(result);
  };

  useEffect(() => {
    setTags(tags);
  }, [tags]);

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
