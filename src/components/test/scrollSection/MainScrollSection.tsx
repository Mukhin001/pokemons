import CaruselTest from "../../test/CaruselTest";
import CircularCarousel from "../../test/CircularCarousel";
import ScrollSection from "./ScrollSection";

function MainScrollSection() {
  return (
    <div>
      <div style={{ height: "100vh", background: "" }}>
        <h1 style={{ textAlign: "center", paddingTop: "50vh" }}>Scroll вниз ⬇</h1>
      </div>

      <ScrollSection>
        <h2 style={{ textAlign: "center", padding: "50px", background: "" }}>
          Этот блок плавно появился!
        </h2>
        <CaruselTest />
      </ScrollSection>

      <ScrollSection>
        <p style={{ textAlign: "center", padding: "50px", background: "" }}>
          А этот блок появился позже.
        </p>
        <CircularCarousel />
      </ScrollSection>

      <div style={{ height: "100vh", background: "" }}></div>
    </div>
  );
}

export default MainScrollSection;