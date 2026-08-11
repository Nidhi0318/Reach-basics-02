import { useState } from "react";

function StudentResult() {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [result, setResult] = useState(null);

  const checkResult = () => {
    let grade = "";

    if (marks >= 90) grade = "A+";
    else if (marks >= 80) grade = "A";
    else if (marks >= 70) grade = "B";
    else if (marks >= 60) grade = "C";
    else if (marks >= 35) grade = "D";
    else grade = "F";

    setResult({
      grade,
      status: marks >= 35 ? "Pass" : "Fail",
    });
  };

  return (
    <div className="container">
      <h2>Student Result Checker</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />

      <button onClick={checkResult}>Check Result</button>

      {result && (
        <div className="result">
          <h3>Name : {name}</h3>
          <h3>Marks : {marks}</h3>
          <h3>Grade : {result.grade}</h3>
          <h3>Status : {result.status}</h3>
        </div>
      )}
    </div>
  );
}

export default StudentResult;