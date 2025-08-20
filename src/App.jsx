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
import "./styles/App.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
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
      <Header pdfUrl={pdfUrl} />

      <main className="main">
        <CVForms
          setSavedPersonalInfo={setSavedPersonalInfo}
          setSavedEducationInfo={setSavedEducationInfo}
          setSavedExperienceInfo={setSavedExperienceInfo}
          handleChange={handleChange}
        />

        <Preview
          personalInfo={savedPersonalInfo}
          educationInfo={savedEducationInfo}
          experienceInfo={savedExperienceInfo}
          pdfUrl={pdfUrl}
          setPdfUrl={setPdfUrl}
        />
      </main>
    </div>
  );
}

export default App;
