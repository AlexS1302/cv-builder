function EducationList({ educations, handleEditEducation, setShowForm }) {
  return (
    <>
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
        Add Education
      </button>
    </>
  );
}
export default EducationList;
