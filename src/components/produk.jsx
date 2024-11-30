// import type
import PropTypes from "prop-types";

Produk.propTypes = {
  index: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  decripsi: PropTypes.string,
};

export function Produk ({ index, image, title, decripsi }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        padding: "16px",
        minWidth: "100px",
        borderRadius: "12px",
        backgroundColor: "white",
      }}
    >
      <div>
        <img
          src={image + index}
          alt={title}
          style={{
            width: "50px",
            minWidth: "40px",
          }}
        />
      </div>
      <div>
        <h4 style={{ fontWeight: "bold", textTransform: "capitalize", color: "black" }}>
          {title}
        </h4>
        <p style={{ color: "black" }}>{decripsi}</p>
      </div>
    </div>
  );
}