import React from "react";

const Contact = ({ students }) => {
  return (
    <section style={{ textAlign: `left`, padding: `2rem` }}>
      {students &&
        students.map((s, index) => (
          <div key={index}>
            <img src={s.pic} alt={s.firstName} />
            <p>Email: {s.email}</p>
            <p>Company: {s.company}</p>
            <p>Skill: {s.skill}</p>
            {/* <p>Average: {s.average}</p> */}
          </div>
        ))}
    </section>
  );
};

export default Contact;
