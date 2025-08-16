import { pdfjs } from "react-pdf";
import { useState } from "react";
import Header from "./components/Header";
import Preview from "./components/Preview";
import PersonalInfoSection from "./components/sections/PersonalInfoSection";
import EducationSection from "./components/sections/EducationSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import {
  mockPersonalInfo,
  mockEducationInfo,
  mockExperienceInfo,
} from "./mockData";
import "./styles/App.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  // State definitions for form input fields
  const [savedPersonalInfo, setSavedPersonalInfo] = useState(mockPersonalInfo);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phoneNumber: "",
    location: "",
    summary: "",
  });

  const [savedEducationInfo, setSavedEducationInfo] =
    useState(mockEducationInfo);
  const [educationInfo, setEducationInfo] = useState({
    id: "",
    institution: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const [savedExperienceInfo, setSavedExperienceInfo] =
    useState(mockExperienceInfo);
  const [experienceInfo, setExperienceInfo] = useState({
    id: "",
    employer: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  // Change handler for form input fields
  const handleChange = (e, setSection, key) => {
    const { value } = e.target;

    setSection((prevData) => ({
      ...prevData,
      [key]: value,
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
            setSavedPersonalInfo={setSavedPersonalInfo}
            handleChange={handleChange}
          />

          <EducationSection
            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}
            setSavedEducationInfo={setSavedEducationInfo}
            handleChange={handleChange}
          />

          <ExperienceSection
            experienceInfo={experienceInfo}
            setExperienceInfo={setExperienceInfo}
            setSavedExperienceInfo={setSavedExperienceInfo}
            handleChange={handleChange}
          />
        </div>

        <Preview
          personalInfo={savedPersonalInfo}
          educationInfo={savedEducationInfo}
          experienceInfo={savedExperienceInfo}
        />
      </main>
    </div>
  );
}

export default App;
