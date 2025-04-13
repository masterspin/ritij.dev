import Section from "./Section";
import Experience from "../Experience";

type SectionProps = {
  className?: string;
};

const Section2 = ({ className = "" }: SectionProps) => {
  return (
    <Section id="experience" className={`${className} border-t`}>
      <div className="flex flex-col w-full md:flex-row justify-center gap-y-16">
        <Experience />
      </div>
    </Section>
  );
};

export default Section2;
