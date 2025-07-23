import "../../styles/sections/PersonalInfoSection.css";
import { useState } from "react";
import FieldGroup from "../FieldGroup";

export default function PersonalInfoSection() {
  const [isOpen, setIsOpen] = useState(true);

  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const personalFields = [
    {
      id: "fullName",
      name: "fullName",
      label: "Full Name",
      value: fullName,
      setter: setFullName,
      type: "text",
      placeholder: "Full Name",
      autoComplete: "name",
    },
    {
      id: "jobTitle",
      name: "jobTitle",
      label: "Job Title",
      value: jobTitle,
      setter: setJobTitle,
      type: "text",
      placeholder: "Job Title",
      autoComplete: "organization-title",
    },
    {
      id: "email",
      name: "email",
      label: "Email Address",
      value: email,
      setter: setEmail,
      type: "email",
      placeholder: "Email Address",
      autoComplete: "email",
    },
    {
      id: "phoneNumber",
      name: "phoneNumber",
      label: "Phone Number",
      value: phone,
      setter: setPhone,
      type: "tel",
      placeholder: "Phone Number",
      autoComplete: "tel",
    },
    {
      id: "location",
      name: "location",
      label: "Location",
      value: location,
      setter: setLocation,
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