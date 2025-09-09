import React, { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && grade) {
      addStudent({ name, age, grade });
      setName("");
      setAge("");
      setGrade("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
