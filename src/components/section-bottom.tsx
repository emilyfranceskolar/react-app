import dogPic from "../assets/dog.png";
import "./section-bottom.css";
export default function SectionBottom() {
  return (
    <>
      <section>
        <div className="bottom-container">
          <div className="bottom-section-content">
            <h3 className="bottom-section-title">What I enjoy 🤠</h3>
            <ul className="bottom-section-list">
              <li>Ideating and making trouble in a kitchen.</li>
              <li>Going to saunas (preferably by the sea).</li>
              <li>Watching, discovering new TV series & Movies.</li>
              <li>
                Traveling and learning from the people I meet on my travels.
              </li>
              <li>Listening to music & web radio from around the world.</li>
              <li>Hanging out with friends and their animals.</li>
            </ul>
          </div>
          <img src={dogPic} alt="Pic of me" />
        </div>
      </section>
    </>
  );
}
