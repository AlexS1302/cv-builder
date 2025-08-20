import { useState } from "react";
import EducationForm from "../forms/EducationForm";
import EducationList from "../lists/EducationList";
import { mockEducationInfo } from "../../mockData";
import "../../styles/Sections.css";
import { ChevronDown, LibraryBig } from "lucide-react";

function EducationSection({
  isOpen,
  toggleOpen,
  setSavedEducationInfo,
  handleChange,
}) {
  const [educationInfo, setEducationInfo] = useState({
    id: "",
    institution: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });
  const [educations, setEducations] = useState(mockEducationInfo);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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
    setSavedEducationInfo(newEducations);

    newEducations.length === 0 ? setShowForm(true) : setShowForm(false);

    setIsEditing(false);
    setEducationInfo({
      id: "",
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
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
