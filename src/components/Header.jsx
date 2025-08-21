import "../styles/Header.css";
import HeaderIcon from "../assets/icons/logo.svg";
import { Download, FileUser, UserRoundPen } from "lucide-react";

function Header({ isMobile, showCVForms, setShowCVForms, pdfUrl }) {
  return (
    <div className="Header">
      {isMobile ? (
        <button
          className="toggle-button"
          onClick={() => setShowCVForms((prev) => !prev)}
        >
          {showCVForms ? (
            <>
              <FileUser />
              Preview
            </>
          ) : (
            <>
              <UserRoundPen />
              <>Edit Details</>
            </>
          )}
        </button>
      ) : (
        <div className="branding">
          <img src={HeaderIcon} alt="logo" className="header-logo"></img>
          <h1 className="header-title">CV Builder</h1>
        </div>
      )}

      <a href={pdfUrl} download={"resume.pdf"} className="download-link">
        <button>
          <Download className="download-icon" />
          Download PDF
        </button>
      </a>
    </div>
  );
}

export default Header;
