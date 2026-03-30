import volvoPic from "../assets/volvo.png";
import "./section-top.css";

export default function SectionTop() {
  return (
    <>
      <section>
        <h1 className="top-section-title">I am who, who am I?</h1>
        <div className="top-container">
          <img src={volvoPic} alt="Pic of me" className="volvo" />
          <div className="top-section-content">
            <h3 className="bring-to-table">What I bring to the table 🎯</h3>
            <ul className="top-section-list">
              <li>
                Remaining calm & thriving in fast paced and complex situations.
              </li>
              <li>
                Doing what needs to be done, without overthinking it, or just
                talking about it.
              </li>
              <li>
                Being curious and methodically working to better understand and
                improve digital problems together with others.
              </li>
              <li>
                Finding ways to create solutions through hard work, dedication
                and joy in what I do.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
