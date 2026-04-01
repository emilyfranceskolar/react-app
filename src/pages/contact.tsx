import "./contact.css";

export default function ContactPage() {
  return (
    <>
      <h3 className="contact-main-title">Get and stay in touch!</h3>
      <div className="contact-hero">
        <h1 className="my-email">
          Email: <span>emilyfranceskolar@gmail.com</span>
        </h1>
        <p>or</p>
        <div>
          <a
            className="btn"
            href="https://www.linkedin.com/in/emily-kolar-08727272/"
            target="_blank"
          >
            Connect on LinkedIn →
          </a>
        </div>
      </div>
    </>
  );
}
