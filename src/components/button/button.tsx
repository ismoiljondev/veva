import React, { ReactNode } from "react";
type btnProps = {
  color: string;
  bgcolor: string;
  children: ReactNode;
};
const Button: React.FC<btnProps> = ({ color, bgcolor, children }: btnProps) => {
  return (
    <div>
      <button
        className={`py-3 px-9 text-center rounded-full bg-${[bgcolor]} text-${[
          color,
        ]}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
