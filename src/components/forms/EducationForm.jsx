import FieldGroup from "../FieldGroup";
import { Eraser, Undo2, Brush } from "lucide-react";

function EducationForm({
  educationState,
  educations,
  handleAddEducation,
  handleDeleteEducation,
  formControl,
}) {
  const { educationInfo, setEducationInfo, handleChange } = educationState;
  const { isEditing, setIsEditing, setShowForm } = formControl;

  // Field definitions for generating education input fields
  const educationFields = [
    {
      id: "institution",
      name: "institution",
      label: "Institution",
      value: educationInfo.institution,
      onChange: (e) => handleChange(e, setEducationInfo, "institution"),
      type: "text",
      placeholder: "Institution",
    },
    {
      id: "degree",
      name: "degree",
      label: "Degree",
      value: educationInfo.degree,
      onChange: (e) => handleChange(e, setEducationInfo, "degree"),
      type: "text",
      placeholder: "Degree",
    },
    {
      id: "educationStartDate",
      name: "educationStartDate",
      label: "Start Date",
      value: educationInfo.startDate,
      onChange: (e) => handleChange(e, setEducationInfo, "startDate"),
      type: "date",
      layout: "inline",
    },
    {
      id: "educationEndDate",
      name: "educationEndDate",
      label: "End Date",
      value: educationInfo.endDate,
      onChange: (e) => handleChange(e, setEducationInfo, "endDate"),
      type: "date",
      layout: "inline",
    },
    {
      id: "educationLocation",
      name: "educationLocation",
      label: "Location",
      value: educationInfo.location,
      onChange: (e) => handleChange(e, setEducationInfo, "location"),
      type: "text",
      placeholder: "London, UK",
      autoComplete: "address-level2",
    },
    {
      id: "educationDescription",
      name: "educationDescription",
      label: "Description",
      value: educationInfo.description,
      onChange: (e) => handleChange(e, setEducationInfo, "description"),
      type: "text",
      placeholder: "Description",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const { institution, degree, startDate, endDate, location, description } = educationInfo;
    if (!institution || !degree || !startDate || !endDate || !location || !description) {
      alert("Please fill out all fields.");
      return;
    }

    handleAddEducation();

    //Clear form
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

  // Helpers
  const handleCancelEdit = () => {
    setShowForm(false);
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FieldGroup fields={educationFields} />
        <div className="form-btn-group">
          <button type="submit" className="save-btn">
            <Brush />
            Save Section
          </button>

          {(isEditing || educations.length > 0) && (
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
              onClick={() => handleDeleteEducation(educationInfo.id)}
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
export default EducationForm;
