import { useState } from "react";
import EducationForm from "../forms/EducationForm";
import "../../styles/sections/EducationSection.css";

function EducationSection({ educationInfo, setEducationInfo, handleChange }) {
  const [educations, setEducations] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleAddEducation = () => {
    const newItem = {
      ...educationInfo,
      id: educationInfo.id || crypto.randomUUID(),
    };

    const isEditing = educations.some((edu) => edu.id === newItem.id);

    if (isEditing) {
      setEducations((prev) =>
        prev.map((edu) => (edu.id === newItem.id ? newItem : edu))
      );
    } else {
      setEducations((prev) => [...prev, newItem]);
    }
    setShowForm(false);
  };

  const handleEditEducation = (idToEdit) => {
    const selectedItem = educations.find((item) => item.id === idToEdit);

    if (selectedItem) {
      setEducationInfo(selectedItem);
      setShowForm(true);
    }
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
            handleAddEducation={handleAddEducation}
          />
        ) : (
          <>
            <ul className="education-list">
              {educations.map((edu) => (
                <li
                  key={edu.id}
                  tabIndex={0}
                  role="option"
                  onClick={() => handleEditEducation(edu.id)}
                  className="education-entry"
                >
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
