import "../styles/CVForm.css";
import PersonalInfoSection from "../components/sections/PersonalInfoSection";
import EducationSection from "./sections/EducationSection";

function CVForm({ personalInfo, setPersonalInfo, educationInfo, setEducationInfo, handleChange }) {

  return (
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
  );
}

export default CVForm;
