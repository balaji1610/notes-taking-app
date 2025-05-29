import { Iinput } from "@/app/interface/interface";
export default function Input(props: Iinput) {
  const { type, name, value, onChange } = props;
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="input-text"
    />
  );
}
