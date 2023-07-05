import React from "react";
function HexaCard({ src, title }) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        width: "8.375rem",
        height: "7.25rem",
      }}
    >
      <img src="images/hesaImage.svg" alt="" />
      <div
        style={{
          position: "absolute",
          top: "31px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img style={{width: "34px", height: "40px"}} src={src} alt="" />
        <p style={{color: "#FFF",fontSize: "1.25rem", fontWeight: "400", textAlign: "center", margin: "5px 0" }}>{title}</p>
      </div>
    </div>
  );
}

export default HexaCard;
