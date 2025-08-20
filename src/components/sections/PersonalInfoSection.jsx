import "../../styles/Sections.css";
import { useState } from "react";
import FieldGenerator from "../FieldGenerator";
import { mockPersonalInfo } from "../../mockData";
import { ChevronDown, Brush, CircleUserRound } from "lucide-react";

export default function PersonalInfoSection({
  isOpen,
  toggleOpen,
  setSavedPersonalInfo,
  handleChange,
}) {
  const [personalInfo, setPersonalInfo] = useState(mockPersonalInfo);

  // Field definitions for generating personal info input fields
  const personalFields = [
    {
      id: "fullName",
      name: "fullName",
      label: "Full Name",
      value: personalInfo.fullName,
      onChange: (e) => handleChange(e, setPersonalInfo, "fullName"),
      type: "text",
      placeholder: "Jane Doe",
      autoComplete: "name",
    },
    {
      id: "headingJobTitle",
      name: "headingJobTitle",
      label: "Job Title",
      value: personalInfo.jobTitle,
      onChange: (e) => handleChange(e, setPersonalInfo, "jobTitle"),
      type: "text",
      placeholder: "Project Manager",
    },
    {
      id: "email",
      name: "email",
      label: "Email Address",
      value: personalInfo.email,
      onChange: (e) => handleChange(e, setPersonalInfo, "email"),
      type: "email",
      placeholder: "janedoe23@gmail.com",
      autoComplete: "email",
      layout: "inline",
    },
    {
      id: "phoneNumber",
      name: "phoneNumber",
      label: "Phone Number",
      value: personalInfo.phoneNumber,
      onChange: (e) => handleChange(e, setPersonalInfo, "phoneNumber"),
      type: "tel",
      placeholder: "07700 800000",
      autoComplete: "tel",
      layout: "inline",
    },
    {
      id: "personalInfoLocation",
      name: "personalInfoLocation",
      label: "Location",
      value: personalInfo.location,
      onChange: (e) => handleChange(e, setPersonalInfo, "location"),
      type: "text",
      placeholder: "London, UK",
      autoComplete: "address-level2",
    },
    {
      id: "summary",
      name: "summary",
      label: "Summary",
      value: personalInfo.summary,
      onChange: (e) => handleChange(e, setPersonalInfo, "summary"),
      type: "text",
      placeholder: "Summary",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, jobTitle, email, phoneNumber, location, summary } =
      personalInfo;
    if (
      !fullName ||
      !jobTitle ||
      !email ||
      !phoneNumber ||
      !location ||
      !summary
    ) {
      alert("Please fill out all fields.");
      return;
    }

    setSavedPersonalInfo(personalInfo);
  };

  return (
    <section className="personal-info-section">
      <h2 onClick={toggleOpen}>
        <CircleUserRound />
        Personal Information{" "}
        <ChevronDown className={`icon ${isOpen ? "open" : "closed"}`} />
      </h2>

      <div className={`dropdown ${isOpen ? "open" : "closed"}`}>
        <form onSubmit={handleSubmit}>
          <FieldGenerator fields={personalFields} />
          <button type="submit" className="save-btn">
            <Brush />
            Save Section
          </button>
        </form>
      </div>
    </section>
  );
}
