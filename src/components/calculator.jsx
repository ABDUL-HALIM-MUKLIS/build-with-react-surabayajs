import { useState } from "react"
import { styleButton } from "../App"

export function Kalkulator() {
  
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [hasil, setHasil] = useState(0)

  return (
    
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", padding: "16px", margin: "120px" }}>
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      // center
      alignItems: "center"
    }}>
      <h2 style={{ fontWeight: "bold" }}>Kalkulator</h2>
      <h1>{hasil}</h1>
      <input type="text" style={{ width: "100px", padding: "12px" }} onChange={(e) => setA(parseInt(e.target.value))} />
      <input type="text" style={{ width: "100px", padding: "12px" }} onChange={(e) => setB(parseInt(e.target.value))} />
      <div style={{ display: "flex", gap: "12px" }}>
        <button style={styleButton} onClick={() => setHasil(a + b)}>+</button>
        <button style={styleButton} onClick={() => setHasil(a - b)}>-</button>
        <button style={styleButton} onClick={() => setHasil(a * b)}>/</button>
        <button style={styleButton} onClick={() => setHasil(a / b)}>*</button>
      </div>
    </div>
  </div>
  )
}