import React from "react";

import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";

export default function MainContent() {
  return (
    <main className="min-h-[300vh]">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
}
