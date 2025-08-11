import FieldGroup from "../FieldGroup";

function EducationForm({
  educationState,
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
      onChange: (e) => handleChange(e, setEducationInfo),
      type: "text",
      placeholder: "Institution",
    },
    {
      id: "degree",
      name: "degree",
      label: "Degree",
      value: educationInfo.degree,
      onChange: (e) => handleChange(e, setEducationInfo),
      type: "text",
      placeholder: "Degree",
    },
    {
      id: "startDate",
      name: "startDate",
      label: "Start Date",
      value: educationInfo.startDate,
      onChange: (e) => handleChange(e, setEducationInfo),
      type: "date",
      layout: "inline",
    },
    {
      id: "endDate",
      name: "endDate",
      label: "End Date",
      value: educationInfo.endDate,
      onChange: (e) => handleChange(e, setEducationInfo),
      type: "date",
      layout: "inline",
    },
    {
      id: "location",
      name: "location",
      label: "Location",
      value: educationInfo.location,
      onChange: (e) => handleChange(e, setEducationInfo),
      type: "text",
      placeholder: "London, UK",
      autoComplete: "address-level2",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const { institution, degree, startDate, endDate, location } = educationInfo;
    if (!institution || !degree || !startDate || !endDate || !location) {
      alert("Please fill out all fields.");
      return;
    }

    handleAddEducation();

    //Clear form
    setEducationInfo({
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  // Helpers
  const handleCancelEdit = () => {
    setShowForm(false);
    setIsEditing(false);
    setEducationInfo({
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FieldGroup fields={educationFields} />
        <button type="submit" className="save-btn">
          Save Section
        </button>
        {isEditing && (
          <>
            <button
              type="button"
              className="cancel-btn"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
            <button
              type="button"
              className="delete-btn"
              onClick={() => handleDeleteEducation(educationInfo.id)}
            >
              Delete
            </button>
          </>
        )}
      </form>
    </>
  );
}
export default EducationForm;
