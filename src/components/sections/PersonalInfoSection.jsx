import "../../styles/Sections.css";
import { useState } from "react";
import FieldGroup from "../FieldGroup";
import { ChevronDown, Brush } from "lucide-react";

export default function PersonalInfoSection({
  personalInfo,
  setPersonalInfo,
  handleChange,
}) {
  const [isOpen, setIsOpen] = useState(true);

  // Field definitions for generating personal info input fields
  const personalFields = [
    {
      id: "fullName",
      name: "fullName",
      label: "Full Name",
      value: personalInfo.fullName,
      onChange: (e) => handleChange(e, setPersonalInfo),
      type: "text",
      placeholder: "Jane Doe",
      autoComplete: "name",
    },
    {
      id: "jobTitle",
      name: "jobTitle",
      label: "Job Title",
      value: personalInfo.jobTitle,
      onChange: (e) => handleChange(e, setPersonalInfo),
      type: "text",
      placeholder: "Project Manager",
      autoComplete: "organization-title",
    },
    {
      id: "email",
      name: "email",
      label: "Email Address",
      value: personalInfo.email,
      onChange: (e) => handleChange(e, setPersonalInfo),
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
      onChange: (e) => handleChange(e, setPersonalInfo),
      type: "tel",
      placeholder: "+44 7700 800000",
      autoComplete: "tel",
      layout: "inline",
    },
    {
      id: "location",
      name: "location",
      label: "Location",
      value: personalInfo.location,
      onChange: (e) => handleChange(e, setPersonalInfo),
      type: "text",
      placeholder: "London, UK",
      autoComplete: "address-level2",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, jobTitle, email, phoneNumber, location } = personalInfo;
    if (!fullName || !jobTitle || !email || !phoneNumber || !location) {
      alert("Please fill out all fields.");
      return;
    }
  };

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <section className="personal-info-section">
      <h2 onClick={toggleOpen}>
        Personal Information{" "}
        <ChevronDown className={`icon ${isOpen ? "open" : "closed"}`} />
      </h2>

      <div className={`dropdown ${isOpen ? "open" : "closed"}`}>
        <form onSubmit={handleSubmit}>
          <FieldGroup fields={personalFields} />
          <button type="submit" className="save-btn">
            <Brush />
            Save Section
          </button>
        </form>
      </div>
    </section>
  );
}
