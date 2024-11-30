import PropTypes from "prop-types";

export const Avatar = ({ size = "66px" }) => {
  return (
    <div
      className="p-1 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          backgroundImage: `url(https://i.pravatar.cc/200?${Math.random()})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.string,
};
