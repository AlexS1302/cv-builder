import { Plus } from "lucide-react";

function ExperienceList({ experiences, handleEditExperience, setShowForm }) {
  return (
    <div className="experience-list-container">
      <ul className="experience-list">
        {experiences.map((exp) => (
          <li
            key={exp.id}
            tabIndex={0}
            role="option"
            onClick={() => handleEditExperience(exp.id)}
            className="experience-entry"
          >
            <p>
              {exp.jobTitle}, at {exp.employer}
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
        Add Experience
      </button>
    </div>
  );
}
export default ExperienceList;
