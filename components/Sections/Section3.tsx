import Section from "./Section";
import Projects from "../Projects";

type SectionProps = {
  className?: string;
};

const Section3 = ({ className = "" }: SectionProps) => {
  return (
    <>
      <Section className={`${className} border-t`}>
        <div className="flex flex-col w-full md:flex-row justify-center gap-y-16">
          <Projects />
        </div>
      </Section>

      {/*
      <Section className={`${className} border-t-0 sm:border-t`}>
        <div className="flex flex-col sm:flex-row justify-center sm:gap-x-6 w-[100%] gap-y-6 px-0 sm:px-10">
          <div className="min-h-screen sm:min-h-fit w-full sm:max-w-[600px] sm:w-1/2 flex flex-col justify-center bg-background sticky top-0 border-t sm:border-t-0"></div>
          <div className="min-h-screen sm:min-h-fit w-full sm:max-w-[600px] sm:w-1/2 flex flex-col justify-center bg-background sticky top-0 border-t sm:border-t-0"></div>
        </div>
      </Section>
      */}
    </>
  );
};

export default Section3;
