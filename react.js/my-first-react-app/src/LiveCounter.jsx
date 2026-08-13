import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
        borderRadius:"20px",
        margin:"20px auto",
      }}
    >
      <h1 style={{ color: "blue" }}>Live Counter</h1>

      <h2
        style={{
          fontSize: "40px",
          color: "green",
        }}
      >
        {count}
      </h2>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => setCount(0)}
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "orange",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;