import { Plus } from "lucide-react";

function EducationList({ educations, handleEditEducation, setShowForm }) {
  return (
    <div className="education-list-container">
      <ul className="education-list">
        {educations.map((edu) => (
          <li
            key={edu.id}
            tabIndex={0}
            role="option"
            onClick={() => handleEditEducation(edu.id)}
            className="education-entry"
          >
            <p>
              {edu.degree}, at {edu.institution}
            </p>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="add-btn"
        onClick={() => setShowForm(true)}
      >
        <Plus />
        Add Education
      </button>
    </div>
  );
}
export default EducationList;
