// all default props values are set in the function signature
export default function Input({
  value = "",
  onChange,
  label,
  type = "text",
  placeholder = "",
  error,
  required = false,
}) {
  //Générer un id unique pour l'input à partir du label
  const inputId = label ? label.toLowerCase().replace(/\s+/g, "-") : undefined;

  return (
    <div className="flex flex-col gap-1">
      {/*affichage du label seulement s'il existe */}
      {label && <label htmlFor={inputId}>{label}</label>}

      {/* Champ input */}
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={`w-full px-3 py-2 rounded-lg border transition-colors bg-bg-primary text-text-primary border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent ${
          error ? "border-danger" : ""
        }`}
      />

      {/* Affichage du message d'erreur seulement s'il existe */}
      {error && <span className="text-sm text-danger">{error}</span>}
    </div>
  );
}
