import { useState } from "react";
import EducationForm from "../forms/EducationForm";
import "../../styles/sections/EducationSection.css";

function EducationSection({educationInfo, setEducationInfo, handleChange}) {
  const [educations, setEducations] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <section className="education-section">
      <h2 onClick={toggleOpen}>Education {isOpen ? "▲" : "▼"}</h2>

      {isOpen &&
        (educations.length === 0 ? (
          <EducationForm
            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}
            handleChange={handleChange}
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
            <button type="button" className="add-btn">
              Add Education
            </button>
          </>
        ))}
    </section>
  );
}

export default EducationSection;
