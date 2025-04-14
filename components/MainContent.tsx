import React from "react";

import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";

export default function MainContent() {
  return (
    <main className="min-h-[300vh]">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
      <Section4 />
    </main>
  );
}
