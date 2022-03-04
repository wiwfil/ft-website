import React from "react";
import "./Modal.css";

const Modal = ({ selectedImageId, setSelectedImageId }) => {
  console.log(typeof selectedImageId);
  const handleClick = (e) => {
    setSelectedImageId(null);
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <img 
        key={selectedImageId}
        src={require(`../../assets/cards/${
          selectedImageId ? selectedImageId : "1"
        }.png`)}
        alt=""
      />
    </div>
  );
};

export default Modal;
