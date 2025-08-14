import { pdfjs } from "react-pdf";
import { useState } from "react";
import Header from "./components/Header";
import Preview from "./components/Preview";
import PersonalInfoSection from "./components/sections/PersonalInfoSection";
import EducationSection from "./components/sections/EducationSection";
import "./styles/App.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phoneNumber: "",
    location: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    institution: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const handleChange = (e, setSection) => {
    const { name, value } = e.target;
    setSection((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="CVForm">
          <PersonalInfoSection
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
            handleChange={handleChange}
          />

          <EducationSection
            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}
            handleChange={handleChange}
          />
        </div>

        <Preview personalInfo={personalInfo} educationInfo={educationInfo} />
      </main>
    </div>
  );
}

export default App;
