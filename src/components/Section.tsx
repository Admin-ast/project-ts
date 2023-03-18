import React from "react";

type Props = {
  children: React.ReactNode;
};

function Section({ children }: Props) {
  return <div className="px-4 lg:max-w-7xl mx-auto">{children}</div>;
}

export default Section;
