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

  const mockPersonalInfo = {
    fullName: "Jane Doe",
    jobTitle: "Project Manager",
    email: "janedoe23@gmail.com",
    phoneNumber: "+44 7700 800000",
    location: "London, UK",
  };

  const [savedPersonalInfo, setSavedPersonalInfo] = useState(mockPersonalInfo);

  const [educationInfo, setEducationInfo] = useState({
    institution: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const mockEducationInfo = [
    {
      id: "mock-id-1",
      institution: "University of Example",
      degree: "BSc Computer Science",
      startDate: "2030",
      endDate: "2033",
      location: "Oxford, UK",
    },
  ];

  const [savedEducationInfo, setSavedEducationInfo] = useState(mockEducationInfo);

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
            setSavedPersonalInfo={setSavedPersonalInfo}
            handleChange={handleChange}
          />

          <EducationSection
            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}
            setSavedEducationInfo={setSavedEducationInfo}
            handleChange={handleChange}
          />
        </div>

        <Preview
          personalInfo={savedPersonalInfo}
          educationInfo={savedEducationInfo}
        />
      </main>
    </div>
  );
}

export default App;
