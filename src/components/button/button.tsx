import React, { ReactNode } from "react";
type btnProps = {
  color: string;
  bgcolor: string;
  children: ReactNode;
  auto?: string;
};
const Button: React.FC<btnProps> = ({
  color,
  bgcolor,
  children,
  auto,
}: btnProps) => {
  return (
    <div className={`w-${auto}`}>
      <button
        className={`py-3 px-9 text-center w-full rounded-full bg-${[
          bgcolor,
        ]} text-${[color]}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
