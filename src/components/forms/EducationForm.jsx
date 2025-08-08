import FieldGroup from "../FieldGroup";

function EducationForm({ educationInfo, setEducationInfo, handleChange }) {
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
    },
    {
      id: "endDate",
      name: "endDate",
      label: "End Date",
      value: educationInfo.endDate,
      onChange: (e) => handleChange(e, setEducationInfo),
      type: "date",
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

    //Clear form
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
      </form>
    </>
  );
}
export default EducationForm;
