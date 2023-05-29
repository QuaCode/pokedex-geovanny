import { IOption } from "@/types/Option.type";

interface IProps {
  options: IOption[];
  onSelect: (value: IOption) => void;
}

export const Filters = ({ options, onSelect }: IProps) => {
  return (
    <div>
      <select>
        {options.map((opt) => (
          <option key={opt.id} onClick={() => onSelect(opt)}>
            {opt.value}
          </option>
        ))}
      </select>
    </div>
  );
};
