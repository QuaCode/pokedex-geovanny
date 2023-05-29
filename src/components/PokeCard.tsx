/* eslint-disable @next/next/no-img-element */
import { IPoke } from "@/types/Poke.type";

export const PokeCard = ({ id, name, sprite, type }: IPoke) => {
  return (
    <div
      style={{
        width: "200px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ccc",
      }}
    >
      <img
        src={sprite}
        alt={name}
        style={{
          width: "100%",
          objectFit: "cover",
          objectPosition: "center center",
        }}
      />

      <h3>{name}</h3>
      {type?.map((item, index) => (
        <p key={index}>{item.type.name}</p>
      ))}
    </div>
  );
};
