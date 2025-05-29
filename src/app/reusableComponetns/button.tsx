import { IButton } from "@/app/interface/interface";
export default function Button(props: IButton) {
  const { bgColor, text, onClick } = props;
  return (
    <div>
      <button
        style={{
          color: "#ffffff",
          backgroundColor: bgColor,
          width: "66px",
          height: "40px",
          borderRadius: "5px",
          fontWeight: "bold",
          fontSize: "13px",
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
