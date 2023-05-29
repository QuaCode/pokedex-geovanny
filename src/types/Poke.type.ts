import { Type } from "@/models/Poke.model";

export interface IPoke {
  id: number;
  name: string;
  type: Type[];
  sprite: string;
}
