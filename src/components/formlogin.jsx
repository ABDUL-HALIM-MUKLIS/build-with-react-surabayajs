import { useRef, useState } from "react"
import { styleButton } from "../App"


export function FormLogin() {
  const [hasil, setHasil] = useState({})
  const refhasil = useRef({})
  return (
    <div className="flex justify-center items-center flex-col p-96">
      <div className="shadow-lg w-[300px] flex justify-center items-center flex-col p-5">

        {hasil.nama && <div>Hallo {hasil.nama}, selamat datang</div>}
        {hasil.alamat && <div>Alamat kamu adalah {hasil.alamat}</div>}
        {hasil.email && <div>Email kamu adalah {hasil.email}</div>}

        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-5">
            <h4>Nama</h4>
            <input type="text" className="w-full border border-1" onChange={(e) => refhasil.current.nama = e.target.value} />
          </div>
          <div className="flex flex-row gap-5">
            <h4>Alamat</h4>
            <input type="text" className="w-full border border-1" onChange={(e) => refhasil.current.alamat = e.target.value} />
          </div>
          <div className="flex flex-row gap-5">
            <h4>Email</h4>
            <input type="text" className="w-full border border-1" onChange={(e) => refhasil.current.email = e.target.value} />
          </div>
        </div>
        <button className="mt-5 bg-black text-white font-bold py-2 px-4 rounded" onClick={() => setHasil(refhasil.current)}>Submit</button>
      </div>
    </div>
  )
}