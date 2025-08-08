import { useState } from "react";
import EducationForm from "../forms/EducationForm";
import "../../styles/sections/EducationSection.css";

function EducationSection({ educationInfo, setEducationInfo, handleChange }) {
  const [educations, setEducations] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleNewEducation = () => {
    setEducations((prevEducations) => [...prevEducations, educationInfo]);
    setShowForm(false);
  };

  return (
    <section className="education-section">
      <h2 onClick={toggleOpen}>Education {isOpen ? "▲" : "▼"}</h2>

      {isOpen &&
        (showForm ? (
          <EducationForm
            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}
            handleChange={handleChange}
            handleNewEducation={handleNewEducation}
          />
        ) : (
          <>
            <ul className="education-list">
              {educations.map((edu) => (
                <li key={edu.id} className="education-entry">
                  <p>
                    {edu.degree}, at {edu.institution}
                  </p>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="add-btn"
              onClick={() => setShowForm(true)}
            >
              Add Education
            </button>
          </>
        ))}
    </section>
  );
}

export default EducationSection;
