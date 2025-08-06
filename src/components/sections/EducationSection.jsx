import { useState } from "react";
import FieldGroup from "../FieldGroup";

function EducationSection() {
    const [isOpen, setIsOpen] = useState(true);


    const toggleOpen = () => setIsOpen((prev) => !prev);
  return (
    <section className="education-section">
      <h2 onClick={toggleOpen}>Education {isOpen ? "▲" : "▼"}</h2>

    </section>
  )
}
export default EducationSection