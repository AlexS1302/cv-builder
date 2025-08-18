import { useState } from "react";
import ExperienceForm from "../forms/ExperienceForm";
import ExperienceList from "../lists/ExperienceList";
import { mockExperienceInfo } from "../../mockData";
import "../../styles/Sections.css";
import { ChevronDown, BriefcaseBusiness } from "lucide-react";

function ExperienceSection({ setSavedExperienceInfo, handleChange }) {
  const [experienceInfo, setExperienceInfo] = useState({
    id: "",
    employer: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });
  const [experiences, setExperiences] = useState(mockExperienceInfo);
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  // Helpers
  const handleAddExperience = () => {
    const newItem = {
      ...experienceInfo,
      id: experienceInfo.id || crypto.randomUUID(),
    };

    const editing = experiences.some((exp) => exp.id === newItem.id);

    let updatedList;

    if (editing) {
      updatedList = experiences.map((exp) =>
        exp.id === newItem.id ? newItem : exp
      );
    } else {
      updatedList = [...experiences, newItem];
    }

    setExperiences(updatedList);
    setSavedExperienceInfo(updatedList);

    setShowForm(false);
    setIsEditing(false);
  };

  const handleEditExperience = (idToEdit) => {
    const selectedItem = experiences.find((item) => item.id === idToEdit);

    if (selectedItem) {
      setExperienceInfo(selectedItem);
      setShowForm(true);
      setIsEditing(true);
    }
  };

  const handleDeleteExperience = (id) => {
    const newExperiences = experiences.filter((exp) => exp.id !== id);
    setExperiences(newExperiences);
    setSavedExperienceInfo(newExperiences);

    newExperiences.length === 0 ? setShowForm(true) : setShowForm(false);

    setIsEditing(false);
    setExperienceInfo({
      id: "",
      employer: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  // Grouping props to reduce clutter in the return statement
  const experienceState = {
    experienceInfo,
    setExperienceInfo,
    handleChange,
  };

  const formControl = {
    isEditing,
    setIsEditing,
    setShowForm,
  };

  return (
    <section className="experience-section">
      <h2 onClick={toggleOpen}>
        <BriefcaseBusiness />
        Experience{" "}
        <ChevronDown className={`icon ${isOpen ? "open" : "closed"}`} />
      </h2>

      <div className={`dropdown ${isOpen ? "open" : "closed"}`}>
        {showForm ? (
          <ExperienceForm
            experienceState={experienceState}
            experiences={experiences}
            handleAddExperience={handleAddExperience}
            handleDeleteExperience={handleDeleteExperience}
            formControl={formControl}
          />
        ) : (
          <ExperienceList
            experiences={experiences}
            handleEditExperience={handleEditExperience}
            setShowForm={setShowForm}
          />
        )}
      </div>
    </section>
  );
}

export default ExperienceSection;
