import { useState } from "react";
import EducationForm from "../forms/EducationForm";
import EducationList from "../lists/EducationList";
import "../../styles/sections/EducationSection.css";

function EducationSection({ educationInfo, setEducationInfo, handleChange }) {
  const [educations, setEducations] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  // Helpers
  const handleAddEducation = () => {
    const newItem = {
      ...educationInfo,
      id: educationInfo.id || crypto.randomUUID(),
    };

    const editing = educations.some((edu) => edu.id === newItem.id);

    if (editing) {
      setEducations((prev) =>
        prev.map((edu) => (edu.id === newItem.id ? newItem : edu))
      );
    } else {
      setEducations((prev) => [...prev, newItem]);
    }
    setShowForm(false);
    setIsEditing(false);
  };

  const handleEditEducation = (idToEdit) => {
    const selectedItem = educations.find((item) => item.id === idToEdit);

    if (selectedItem) {
      setEducationInfo(selectedItem);
      setShowForm(true);
      setIsEditing(true);
    }
  };

  const handleDeleteEducation = (id) => {
    const newEducations = educations.filter((edu) => edu.id !== id);

    setEducations(newEducations);
    setShowForm(false);
  };

  // Grouping props
  const educationState = {
    educationInfo,
    setEducationInfo,
    handleChange,
  };

  const formControl = {
    isEditing,
    setIsEditing,
    setShowForm,
  };

  return (
    <section className="education-section">
      <h2 onClick={toggleOpen}>Education {isOpen ? "▲" : "▼"}</h2>

      {isOpen &&
        (showForm ? (
          <EducationForm
            educationState={educationState}
            handleAddEducation={handleAddEducation}
            handleDeleteEducation={handleDeleteEducation}
            formControl={formControl}
          />
        ) : (
          <EducationList
            educations={educations}
            handleEditEducation={handleEditEducation}
            setShowForm={setShowForm}
          />
        ))}
    </section>
  );
}

export default EducationSection;
