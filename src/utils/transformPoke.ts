import { placeholderImage } from "@/assets/placeholderImage";
import { IModel_PokeModel } from "@/models/Poke.model";
import { IPoke } from "@/types/Poke.type";

interface IProps {
  data: IModel_PokeModel;
}

export const transformPoke = ({ data }: IProps): IPoke => ({
  id: data.id,
  name: data.name,
  type: data.types,
  sprite: data.sprites?.other?.dream_world.front_default || placeholderImage,
});
