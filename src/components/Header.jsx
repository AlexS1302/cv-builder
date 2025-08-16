import "../styles/Header.css";
import HeaderIcon from "../assets/icons/logo.svg";
import { Download } from "lucide-react";

function Header({ pdfUrl }) {
  return (
    <div className="header">
      <div className="branding">
        <img src={HeaderIcon} alt="logo" className="header-logo"></img>
        <h1 className="header-title">CV Builder</h1>
      </div>
      <a href={pdfUrl} download={"resume.pdf"} className="download-link">
        <button>
          <Download />
          Download PDF
        </button>
      </a>
    </div>
  );
}

export default Header;
