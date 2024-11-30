import { useState } from "react";
import { Produk } from "./produk";

import PropTypes from "prop-types";
Produk.propTypes = {
  index: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  decripsi: PropTypes.string,
};

export function ListProduk() {
  const title = "Lagi trending, nih";

  const [produk, setProduk] = useState([
    {
      id: 1,
      image: "https://picsum.photos/200/300?random=",
      title: "Indome",
      decripsi: "50 produk",
    },
    {
      id: 2,
      image: "https://picsum.photos/200/300?random=",
      title: "supermie",
      decripsi: "40 produk",
    },
    {
      id: 3,
      image: "https://picsum.photos/200/300?random=",
      title: "mie sukes",
      decripsi: "12 produk",
    },
    {
      id: 4,
      image: "https://picsum.photos/200/300?random=",
      title: "mie sedap",
      decripsi: "32 produk",
    },
    {
      id: 5,
      image: "https://picsum.photos/200/300?random=",
      title: "mie sakura",
      decripsi: "23 produk",
    },
    {
      id: 6,
      image: "https://picsum.photos/200/300?random=",
      title: "mie korea",
      decripsi: "12 produk",
    },
    {
      id: 7,
      image: "https://picsum.photos/200/300?random=",
      title: "mie jepang",
      decripsi: "21 produk",
    },
  ]);

  return (
    <>
      <div className="p-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setProduk([
              ...produk,
              {
                id: produk.length + 1,
                image: "https://picsum.photos/200/300?random=",
                title: e.target.title.value,
                decripsi: e.target.decripsi.value,
              },
            ]);
            e.target.reset();
          }}
        >
          <input type="text" name="title" placeholder="title" className="h-10 border border-1 w-[300px] rounded pl-2" />
          <input className="h-10 w-[300px] border border-1 rounded pl-2" type="text" name="decripsi" placeholder="decripsi" />
          <button type="submit" className="p-2 text-white bg-black rounded-tr-lg rounded-br-lg">Simpan</button>
        </form>
      </div>
      <div className="p-5">
        <div style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
          <h2 style={{ fontWeight: "bold" }}>{title}</h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "12px",
          }}
        >
          {produk.sort((a, b) => b.id - a.id).map((item, index) => (
            <Produk
              key={index}
              index={index}
              image={item.image}
              title={item.title}
              decripsi={item.decripsi}
            />
          ))}
        </div>

        <div style={{
          marginTop: "120px",
          display: "flex",
        }}>
        </div>

      </div>
    </>
  )
}

