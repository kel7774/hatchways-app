import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { Collapse } from "react-collapse";
import { Styles } from "../styles/CollapsibleStyles";

const Collapsible = ({
  isOpened,
  students,
  tags,
  handleDelete,
  handleAddition,
  delimiters,
}) => {
  return (
    <Styles>
      <Collapse isOpened={isOpened}>
        {students.grades.map((g, index) => (
          <div>
            <ul className="grades-list">
              <li key={index}>
                Test {index + 1}: {g}%
              </li>
            </ul>
          </div>
        ))}
        <ReactTags
          tags={tags}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          delimiters={delimiters}
        />
      </Collapse>
    </Styles>
  );
};

export default Collapsible;
