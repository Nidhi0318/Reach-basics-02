import { useState } from "react";

function Greeting() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Greeting App</h2>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Hello, {name}</h3>
    </div>
  );
}
export default Greeting;