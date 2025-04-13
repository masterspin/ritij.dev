import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({
  className = "",
  children,
  id = "",
}: SectionProps & { id?: string }) => {
  return (
    <div
      id={id}
      className={`min-h-screen flex flex-col justify-center items-center bg-background ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
