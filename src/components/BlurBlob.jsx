import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({
  position,
  size,
  colors = ["#8245ec", "#ff6ec7", "#ffdd57"],
}) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: "translate(-50%, -50%)",
      }}
    >
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-full h-full rounded-full opacity-30 blur-3xl animate-blob transition-all duration-[7000ms] ease-in-out`}
          style={{
            backgroundColor: color,
            position: "absolute",
            top: `${Math.random() * 20 - 10}%`,
            left: `${Math.random() * 20 - 10}%`,
            zIndex: index,
            boxShadow: `0 0 0.5rem ${color}`,
          }}
        ></div>
      ))}
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default BlurBlob;
