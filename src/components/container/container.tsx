import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container max-w-[1600px] w-[80%] m-auto max-xl:w-[85%] max-lg:w-[90%] max-md:w-[95%]">
      {children}
    </div>
  );
};

export default Container;
