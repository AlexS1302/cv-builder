import "../styles/CVForm.css";
import PersonalInfoSection from "../components/sections/PersonalInfoSection";
import EducationSection from "./sections/EducationSection";

function CVForm({ personalInfo, setPersonalInfo, handleChange }) {

  return (
    <div className="CVForm">
      <PersonalInfoSection
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        handleChange={handleChange}
      />
      <EducationSection
      />
    </div>
  );
}

export default CVForm;
