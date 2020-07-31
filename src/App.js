import React, { useState, useEffect } from "react";
import axios from "axios";
import Fuse from "fuse.js";
import Student from "./components/Student";
import Search from "./components/Search";
import TagSearch from "./components/TagSearch";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [query, updateQuery] = useState("");
  const [tags, setTags] = useState([]);
  const [tagQuery, setTagQuery] = useState("");

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

  const tagFuse = new Fuse(tags, {
    keys: ["text", "id"],
    includesMatches: true,
    minMatchCharLength: 2,
  });

  function handleChange(e) {
    updateQuery(e.target.value);
  }

  function handleTags(e) {
    setTagQuery(e.target.value);
  }

  const results = fuse.search(query);
  const studentResults = query ? results.map((s) => s.item) : students;

  const tagResults = tagFuse.search(tagQuery);
  const taggedResults = tagQuery ? tagResults.map((s) => s.item) : tags;

  useEffect(() => {
    getStudents();
  }, []);

  if (loading) return "Loading ...";
  return (
    <div className="App">
      <main>
        <Search query={query} handleChange={handleChange} />
        <TagSearch query={tagQuery} handleTags={handleTags} />
        {studentResults &&
          studentResults.map((s, key) => <Student key={key} students={s} />)}
        {taggedResults &&
          taggedResults.map((s, key) => <Student key={key} students={s} />)}
      </main>
    </div>
  );
}

export default App;
