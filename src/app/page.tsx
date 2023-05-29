"use client";
import { Filters } from "@/components/Filters";
import { PokeCard } from "@/components/PokeCard";
import { IModel_PokeModel } from "@/models/Poke.model";
import { IOption } from "@/types/Option.type";
import { IPoke } from "@/types/Poke.type";
import { getData } from "@/utils/getData";
import { transformPoke } from "@/utils/transformPoke";
import { useEffect, useState } from "react";

export default function Home() {
  const [allData, setAllData] = useState<IPoke[]>();

  useEffect(() => {
    const test = async () => {
      const rawData = await getData<IModel_PokeModel[]>({
        url: "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0",
        options: { method: "GET" },
      });

      const data = rawData.map((data) => transformPoke({ data }));
      setAllData(data);
    };
    test();
  }, []);

  const filterByTypeHandler = (opt: IOption) => {
    console.log(opt);
  };

  return (
    <main>
      {/*       <Filters  /> */}
      <div
        style={{
          width: "100vw",
          gap: "5px",
          display: "grid",
          gridTemplateColumns: "grid-template-columns: repeat(200px)",
        }}
      >
        {allData?.map((item) => (
          <PokeCard {...item} key={item.id} />
        ))}
      </div>
    </main>
  );
}
