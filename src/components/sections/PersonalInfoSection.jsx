import "../../styles/sections/PersonalInfoSection.css";
import { useState } from "react";
import FieldGroup from "../FieldGroup";

export default function PersonalInfoSection() {
  const [isOpen, setIsOpen] = useState(true);

  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    email: '',
    phoneNumber: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const personalFields = [
    {
      id: "fullName",
      name: "fullName",
      label: "Full Name",
      value: formData.fullName,
      onChange: handleChange,
      type: "text",
      placeholder: "Full Name",
      autoComplete: "name",
    },
    {
      id: "jobTitle",
      name: "jobTitle",
      label: "Job Title",
      value: formData.jobTitle,
      onChange: handleChange,
      type: "text",
      placeholder: "Job Title",
      autoComplete: "organization-title",
    },
    {
      id: "email",
      name: "email",
      label: "Email Address",
      value: formData.email,
      onChange: handleChange,
      type: "email",
      placeholder: "Email Address",
      autoComplete: "email",
      layout: "inline",
    },
    {
      id: "phoneNumber",
      name: "phoneNumber",
      label: "Phone Number",
      value: formData.phoneNumber,
      onChange: handleChange,
      type: "tel",
      placeholder: "Phone Number",
      autoComplete: "tel",
      layout: "inline",
    },
    {
      id: "location",
      name: "location",
      label: "Location",
      value: formData.location,
      onChange: handleChange,
      type: "text",
      placeholder: "Location",
      autoComplete: "address-level2",
    },
  ];

  return (
    <section className="personal-info-section">
      <h2 onClick={toggleOpen}>Personal Information {isOpen ? "▲" : "▼"}</h2>

      {isOpen && (
        <form onSubmit={handleSubmit}>
          <FieldGroup fields={personalFields} />
          <button type="submit">Save Section</button>
        </form>
      )}
    </section>
  );
}