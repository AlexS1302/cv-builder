import { useState } from "react";
import PersonalInfoSection from "./sections/PersonalInfoSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import ".././styles/CVForms.css";

function CVForms({setSavedPersonalInfo, setSavedEducationInfo, setSavedExperienceInfo, handleChange}) {
  const [openSection, setOpenSection] = useState(null);
  const handleToggle = (sectionName) => {
    setOpenSection((prev) => (prev === sectionName ? null : sectionName));
  };

  return (
    <div className="CVForms">
      <PersonalInfoSection
        isOpen={openSection === "personal"}
        toggleOpen={() => handleToggle("personal")}
        setSavedPersonalInfo={setSavedPersonalInfo}
        handleChange={handleChange}
      />
      <EducationSection
        isOpen={openSection == "education"}
        toggleOpen={() => handleToggle("education")}
        setSavedEducationInfo={setSavedEducationInfo}
        handleChange={handleChange}
      />
      <ExperienceSection
        isOpen={openSection == "experience"}
        toggleOpen={() => handleToggle("experience")}
        setSavedExperienceInfo={setSavedExperienceInfo}
        handleChange={handleChange}
      />
    </div>
  );
}
export default CVForms;
