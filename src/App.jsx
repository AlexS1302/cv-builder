import { pdfjs } from "react-pdf";
import { useState } from "react";
import Header from "./components/Header";
import Preview from "./components/Preview";
import CVForms from "./components/CVForms";
import {
  mockPersonalInfo,
  mockEducationInfo,
  mockExperienceInfo,
} from "./mockData";
import useBreakpoint from "./hooks/useBreakpoint";
import "./styles/App.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  const isMobile = useBreakpoint("(max-width: 1024px)");
  const [showCVForms, setShowCVForms] = useState(true);
  const [pdfUrl, setPdfUrl] = useState(null);

  const [savedPersonalInfo, setSavedPersonalInfo] = useState(mockPersonalInfo);
  const [savedEducationInfo, setSavedEducationInfo] =
    useState(mockEducationInfo);
  const [savedExperienceInfo, setSavedExperienceInfo] =
    useState(mockExperienceInfo);

  const handleChange = (e, setSection, key) => {
    const { value } = e.target;
    setSection((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <div className="App">
      <Header
        isMobile={isMobile}
        showCVForms={showCVForms}
        setShowCVForms={setShowCVForms}
        pdfUrl={pdfUrl}
      />

      <main className="main">
        <div
          style={{
            display: isMobile && !showCVForms ? "none" : "block",
          }}
        >
          <CVForms
            setSavedPersonalInfo={setSavedPersonalInfo}
            setSavedEducationInfo={setSavedEducationInfo}
            setSavedExperienceInfo={setSavedExperienceInfo}
            handleChange={handleChange}
          />
        </div>

        <div
          style={{
            display: isMobile && showCVForms ? "none" : "block",
          }}
        >
          <Preview
            personalInfo={savedPersonalInfo}
            educationInfo={savedEducationInfo}
            experienceInfo={savedExperienceInfo}
            pdfUrl={pdfUrl}
            setPdfUrl={setPdfUrl}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
