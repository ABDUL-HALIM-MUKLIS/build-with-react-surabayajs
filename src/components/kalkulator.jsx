import { useEffect, useState } from "react"

export const Kalkulator = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [hasil, setHasil] = useState(0)

  useEffect(() => {
    setHasil(a + b)
  }, [a, b])

  return (
    <div className="p-5 w-[300px] flex flex-col gap-5">
      <div>Kalkulator</div>
      <h1>{hasil}</h1>
      <input type="text" onChange={(e) => setA(parseInt(e.target.value))} />
      <input type="text" onChange={(e) => setB(parseInt(e.target.value))} />
    </div>
  )
}