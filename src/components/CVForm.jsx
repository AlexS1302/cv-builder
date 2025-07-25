import "../styles/CVForm.css";
import PersonalInfoSection from "../components/sections/PersonalInfoSection";

function CVForm({ personalInfo, setPersonalInfo, handleChange }) {

  return (
    <div className="CVForm">
      <PersonalInfoSection
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        handleChange={handleChange}
      />
    </div>
  );
}

export default CVForm;
