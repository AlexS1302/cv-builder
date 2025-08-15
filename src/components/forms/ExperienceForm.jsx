import FieldGroup from "../FieldGroup";
import { Eraser, Undo2, Brush } from "lucide-react";

function ExperienceForm({
  experienceState,
  experiences,
  handleAddExperience,
  handleDeleteExperience,
  formControl,
}) {
  const { experienceInfo, setExperienceInfo, handleChange } = experienceState;
  const { isEditing, setIsEditing, setShowForm } = formControl;

  // Field definitions for generating experience input fields
  const experienceFields = [
    {
      id: "employer",
      name: "employer",
      label: "Employer",
      value: experienceInfo.employer,
      onChange: (e) => handleChange(e, setExperienceInfo),
      type: "text",
      placeholder: "Employer",
    },
    {
      id: "experienceJobTitle",
      name: "experienceJobTitle",
      label: "Job Title",
      value: experienceInfo.jobTitle,
      onChange: (e) => handleChange(e, setExperienceInfo),
      type: "text",
      placeholder: "Job Title",
    },
    {
      id: "experienceStartDate",
      name: "experienceStartDate",
      label: "Start Date",
      value: experienceInfo.startDate,
      onChange: (e) => handleChange(e, setExperienceInfo),
      type: "date",
      layout: "inline",
    },
    {
      id: "experienceEndDate",
      name: "experienceEndDate",
      label: "End Date",
      value: experienceInfo.endDate,
      onChange: (e) => handleChange(e, setExperienceInfo),
      type: "date",
      layout: "inline",
    },
    {
      id: "experienceLocation",
      name: "experienceLocation",
      label: "Location",
      value: experienceInfo.location,
      onChange: (e) => handleChange(e, setExperienceInfo),
      type: "text",
      placeholder: "London, UK",
      autoComplete: "address-level2",
    },
    {
      id: "experienceDescription",
      name: "experienceDescription",
      label: "Description",
      value: experienceInfo.description,
      onChange: (e) => handleChange(e, setExperienceInfo),
      type: "text",
      placeholder: "Description",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const { employer, jobTitle, startDate, endDate, location, description } = experienceInfo;
    if (!employer || !jobTitle || !startDate || !endDate || !location || !description) {
      alert("Please fill out all fields.");
      return;
    }

    handleAddExperience();

    //Clear form
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

  // Helpers
  const handleCancelEdit = () => {
    setShowForm(false);
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FieldGroup fields={experienceFields} />
        <div className="form-btn-group">
          <button type="submit" className="save-btn">
            <Brush />
            Save Section
          </button>

          {(isEditing || experiences.length > 0) && (
            <button
              type="button"
              className="cancel-btn"
              onClick={handleCancelEdit}
            >
              <Undo2 />
              Cancel
            </button>
          )}

          {isEditing && (
            <button
              type="button"
              className="delete-btn"
              onClick={() => handleDeleteExperience(experienceInfo.id)}
            >
              <Eraser />
              Delete
            </button>
          )}
        </div>
      </form>
    </>
  );
}
export default ExperienceForm;
