import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import "../css/Student.css"; // ✅ CSS import

function StudentManagement() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="container">
      <h1 className="text-xl font-bold p-4">🎓 Student Management</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default StudentManagement;
