
function FieldGroup({ fields }) {
  return (
    <>
      {fields.map((field) =>
        field.layout === "inline" ? (
          <div className="inline-group" key={field.id}>
            <div className="form-group">
              <label htmlFor={field.id}>{field.label}</label>
              <input
                id={field.id}
                name={field.name}
                type={field.type}
                value={field.value}
                onChange={(e) => field.setter(e.target.value)}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
              />
            </div>
          </div>
        ) : (
          <div className="form-group" key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            <input
              id={field.id}
              name={field.name}
              type={field.type}
              value={field.value}
              onChange={(e) => field.setter(e.target.value)}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
            />
          </div>
        )
      )}
    </>
  );
}

export default FieldGroup;
