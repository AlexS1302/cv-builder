function FieldGroup({ fields }) {
  const normalFields = fields.filter((f) => f.layout !== "inline");
  const inlineFields = fields.filter((f) => f.layout === "inline");

  const firstNormalFields = normalFields.slice(0, 2);
  const remainingNormalFields = normalFields.slice(2);

  return (
    <>
      {firstNormalFields.map((field) => (
        <div className="form-group" key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          <input
            id={field.id}
            name={field.name}
            type={field.type}
            value={field.value}
            onChange={field.onChange}
            placeholder={field.placeholder ?? ''}
            autoComplete={field.autoComplete ?? 'off'}
          />
        </div>
      ))}

      {inlineFields.length > 0 && (
        <div className="inline-group">
          {inlineFields.map((field) => (
            <div className="form-group" key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              <input
                id={field.id}
                name={field.name}
                type={field.type}
                value={field.value}
                onChange={field.onChange}
                placeholder={field.placeholder ?? ''}
                autoComplete={field.autoComplete ?? 'off'}
              />
            </div>
          ))}
        </div>
      )}

      {remainingNormalFields.map((field) => (
        <div className="form-group" key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          <input
            id={field.id}
            name={field.name}
            type={field.type}
            value={field.value}
            onChange={field.onChange}
            placeholder={field.placeholder ?? ''}
            autoComplete={field.autoComplete ?? 'off'}
          />
        </div>
      ))}
    </>
  );
}



export default FieldGroup;
