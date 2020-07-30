import React, { useState, useEffect } from "react";
import axios from "axios";
import Student from "./components/Student";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    setLoading(true);
    try {
      const url = `https://www.hatchways.io/api/assessment/students`;
      const response = await axios.get(url);
      setStudents(response.data.students);
      console.log(response.data.students);
      setLoading(false);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  if (loading) return "Loading ...";
  return (
    <div className="App">
      <header className="App-header">Hatchways App</header>
      <main>
        <Student students={students} />
      </main>
    </div>
  );
}

export default App;
