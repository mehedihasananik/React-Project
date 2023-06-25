import React from "react";
import avater from "../../../assets/default-avatar.svg";

export function SecondList({ id, name, nickName, images }) {
  const img = images?.[0]?.small?.url || avater;

  return (
    <div>
      <img style={{ width: "50px" }} src={img} alt="" />
      <h3>name:{name}</h3>
      <h3>nickname:{nickName || "anik"}</h3>
    </div>
  );
}
