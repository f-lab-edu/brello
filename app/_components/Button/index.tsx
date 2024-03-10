import { ButtonHTMLAttributes } from "react";

const SIZE = {
  large: { x: 20, y: 12, fontSize: 16 },
  medium: { x: 12, y: 8, fontSize: 14 },
  small: { x: 8, y: 4, fontSize: 12 },
} as const;

type Size = keyof typeof SIZE;

type ButtonProps<T = HTMLButtonElement> = {
  label?: string;
  size?: Size;
  color?: string;
  bgColor?: string;
  hasBorder?: boolean;
} & ButtonHTMLAttributes<T>;

export default function Button({
  label = "",
  size = "medium",
  color = "#000",
  bgColor = "#fff",
  disabled = false,
  hasBorder = true,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`text-center rounded-lg border-solid 
      ${hasBorder && "border-2"}
      `}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          padding: ${SIZE[size].y}px ${SIZE[size].x}px;
          color: ${color};
          font-size: ${SIZE[size].fontSize}px;
          background-color: ${disabled ? "#efefef" : bgColor};
        }
      `}</style>
    </button>
  );
}
