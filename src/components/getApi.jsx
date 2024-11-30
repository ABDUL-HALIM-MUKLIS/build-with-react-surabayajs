import { useEffect, useState } from "react"

export const GetApi = () => {
  const urlDefault = "https://swapi.dev/api/people";
  const [people, setPeople] = useState()
  const [loading, setLoading] = useState(true)
  const [detail, setDetail] = useState()


  const GetPople = async (url) => {
    setLoading(true)
    const response = await fetch(url || urlDefault)
    const data = await response.json()
    console.log(data)
    if (data && !url) {
      setPeople(data)
    } else {
      setPeople({
        ...people,
        results: [...people.results, ...data.results]
      })
    }

    setLoading(false)
  }

  const GetDetailPople = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    if (data) {
      setDetail(data)
    }
  }

  useEffect(() => {
    GetPople()
  }, [])


  const clickModal = (index) => {
    GetDetailPople(index)
    document.getElementById("my_modal_1").showModal()
  }

  const closeModal = () => {
    setDetail()
    document.getElementById("my_modal_1").close()
  }

  return (
    <div className="container mx-auto ">
      {/* {people && people.results.map((item, index) => <div key={index}>{item.name}</div>)} */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Hair Color</th>
              <th>Skin Color</th>
              <th>Eye Color</th>
              <th>Birth Year</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {people && people.results.map((item, index) => <tr key={index}>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.height}</td>
              <td>{item.mass}</td>
              <td>{item.hair_color}</td>
              <td>{item.skin_color}</td>
              <td>{item.eye_color}</td>
              <td>{item.birth_year}</td>
              <td>{item.gender}</td>
              <td><button className="btn btn-primary" onClick={() => clickModal(item.url)}>Detail</button></td>
            </tr>
            )}
          </tbody>
        </table>
        {loading && <div className="flex justify-center">
          <div className="loading loading-spinner loading-lg text-primary"></div>
        </div>}
      </div>
      <button className="btn btn-primary" onClick={() => GetPople(people.next)}>Next</button>


      <dialog id="my_modal_1" className="modal">
        {detail && <div className="modal-box">
          <h3 className="text-lg font-bold">{detail && detail.name}</h3>
          <p className="py-4">{detail && detail.height}</p>
          <p className="py-4">{detail && detail.mass}</p>
          <p className="py-4">{detail && detail.hair_color}</p>
          <p className="py-4">{detail && detail.skin_color}</p>
          <p className="py-4">{detail && detail.eye_color}</p>
          <p className="py-4">{detail && detail.birth_year}</p>
          <p className="py-4">{detail && detail.gender}</p>
          <div className="modal-action">
            <button className="btn" onClick={() => closeModal()}>Close</button>
          </div>
        </div>}
      </dialog>
    </div>
  )
}