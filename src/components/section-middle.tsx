import "./section-middle.css";

export default function SectionMiddle() {
  return (
    <>
      <section>
        <h1 className="section-middle-title">Skill set in : </h1>
        <div className="list-of-skills">
          <div className="skills-row">
            <span className="skill">HTML</span>
            <span className="skill">CSS</span>
            <span className="skill">Javascript</span>
            <span className="skill">React</span>
            <span className="skill">UX / UI</span>
          </div>
          <div className="skills-row">
            <span className="skill">Figma</span>
            <span className="skill">Design Thinking</span>
            <span className="skill">Service Design</span>
            <span className="skill">Swedish</span>
          </div>
          <div className="skills-row">
            <span className="skill">TheyDo</span>
            <span className="skill">Accessibility</span>
            <span className="skill">Sharepoint</span>
            <span className="skill">Technical Copy</span>
          </div>
        </div>
      </section>
    </>
  );
}
