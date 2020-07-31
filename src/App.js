import React, { useState, useEffect } from "react";
import axios from "axios";
import Fuse from "fuse.js";
import Student from "./components/Student";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [query, updateQuery] = useState("");

  const getStudents = async () => {
    setLoading(true);
    try {
      const url = `https://www.hatchways.io/api/assessment/students`;
      const response = await axios.get(url);
      setStudents(response.data.students);
      setLoading(false);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const fuse = new Fuse(students, {
    keys: ["firstName", "lastName"],
    includeMatches: true,
    minMatchCharLength: 2,
  });

  function handleChange(e) {
    updateQuery(e.target.value);
  }

  const results = fuse.search(query);
  const studentResults = query ? results.map((s) => s.item) : students;

  useEffect(() => {
    getStudents();
  }, []);

  if (loading) return "Loading ...";
  return (
    <div className="App">
      <main>
        <Search query={query} handleChange={handleChange} />
        {studentResults.map((s, key) => (
          <Student key={key} students={s} />
        ))}
      </main>
    </div>
  );
}

export default App;
