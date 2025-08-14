import { useState } from "react";
import EducationForm from "../forms/EducationForm";
import EducationList from "../lists/EducationList";
import "../../styles/Sections.css";
import { ChevronDown, LibraryBig } from "lucide-react";

function EducationSection({
  educationInfo,
  setEducationInfo,
  setSavedEducationInfo,
  handleChange,
}) {
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

    let updatedList;

    if (editing) {
      updatedList = educations.map((edu) =>
        edu.id === newItem.id ? newItem : edu
      );
    } else {
      updatedList = [...educations, newItem];
    }

    setEducations(updatedList);
    setSavedEducationInfo(updatedList);

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

    if (newEducations.length === 0) {
      setShowForm(true);
      setIsEditing(false);
      setEducationInfo({
        institution: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      });
    } else {
      setShowForm(false);
    }
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
        <LibraryBig />
        Education{" "}
        <ChevronDown className={`icon ${isOpen ? "open" : "closed"}`} />
      </h2>

      <div className={`dropdown ${isOpen ? "open" : "closed"}`}>
        {showForm ? (
          <EducationForm
            educationState={educationState}
            educations={educations}
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
