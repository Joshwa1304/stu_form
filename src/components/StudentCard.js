import React from "react";

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h2>Name: {student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
    </div>
  );
}

export default StudentCard;
