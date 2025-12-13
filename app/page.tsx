import About from "@/components/About";
import Admissions from "@/components/Admissions";
import Campus from "@/components/Campus";
import Events from "@/components/Events";
import Faculty from "@/components/Faculty";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import SectionDivider from "@/components/SectionDivider";
import Students from "@/components/Students";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <SectionDivider variant="elegant"/> */}
      <InfoSection />
      {/* <SectionDivider variant="geometric"/> */}
      <About />
      {/* <SectionDivider variant="geometric"/> */}
      <Students />
      {/* <SectionDivider variant="geometric"/> */}
      <Events />
      {/* <SectionDivider variant="elegant"/> */}
      <Faculty />
      {/* <SectionDivider variant="minimal"/> */}
      <Admissions />
      {/* <SectionDivider variant="wave"/> */}
      <Campus />
    </>
  );
}
