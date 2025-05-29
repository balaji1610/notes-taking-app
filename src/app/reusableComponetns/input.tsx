import { Iinput } from "@/app/interface/interface";
export default function Input(props: Iinput) {
  const { type, name, value, onChange, placeholder } = props;
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input-text"
      required
    />
  );
}
