import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students }) {
  if (students.length === 0) {
    return <p className="empty-msg">No students yet. Add first student!</p>;
  }

  return (
    <div>
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </div>
  );
}

export default StudentList;
