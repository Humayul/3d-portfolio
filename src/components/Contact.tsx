import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/humayl-iftikhar/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — humayl-iftikhar
              </a>
            </p>
            <h4>Education</h4>
            <p>
              BS Supply Chain Analytics, University of Lahore — 2023–2027
            </p>
            <p>
              Supply Chain Data Analytics ——
              2023–Present
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/humayul"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/humayl-iftikhar/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Humayl Iftikhar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
