import { useState } from "react";
import EducationForm from "../forms/EducationForm";
import EducationList from "../lists/EducationList";
import "../../styles/Sections.css";
import { ChevronDown } from "lucide-react";

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

  // Grouping props to reduce clutter in the return statement
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
      <h2 onClick={toggleOpen}>
        Education{" "}
        <ChevronDown className={`icon ${isOpen ? "open" : "closed"}`} />
      </h2>

      <div className={`dropdown ${isOpen ? "open" : "closed"}`}>
        {showForm ? (
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
        )}
      </div>
    </section>
  );
}

export default EducationSection;
