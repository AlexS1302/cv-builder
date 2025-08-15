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
    summary: "",
  });

  const mockPersonalInfo = {
    fullName: "Jane Doe",
    jobTitle: "Project Manager",
    email: "janedoe23@gmail.com",
    phoneNumber: "07700 800000",
    location: "London, UK",
    summary:
      "Strategic and adaptable Project Manager with over 5 years of experience leading cross-functional teams to deliver complex projects on time and within budget. Skilled in Agile, Scrum, and Waterfall methodologies, with a proven track record of driving operational efficiency, stakeholder alignment, and measurable business outcomes.",
  };

  const [savedPersonalInfo, setSavedPersonalInfo] = useState(mockPersonalInfo);

  const [educationInfo, setEducationInfo] = useState({
    institution: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const mockEducationInfo = [
    {
      id: "mock-id-1",
      institution: "University of Example",
      degree: "BSc Business Management",
      startDate: "2030",
      endDate: "2033",
      location: "Oxford, UK",
      description: 
        "Gained hands-on experience in budgeting, risk assessment, and stakeholder communication through case studies and collaborative projects. Specialized in project management methodologies including Agile and Waterfall, and completed a capstone project on optimizing cross-functional workflows in dynamic business environments.",
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
