export default function ColorInput({ label = "Couleur", value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      {/* Label */}
      <label className="text-sm font-medium text-text-primary">{label}</label>

      {/* Wrapper moderne pour color picker */}
      <div className="relative group">
        {/* Swatch de prévisualisation cliquable */}
        <div
          className="
            w-full h-12 rounded-lg border-2 border-border
            transition-all duration-200 cursor-pointer
            hover:border-accent hover:shadow-md
            focus-within:ring-2 focus-within:ring-accent focus-within:border-accent
            overflow-hidden
          "
          style={{ backgroundColor: value }}
        >
          {/* Input natif invisible mais fonctionnel */}
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        {/* Code hex affiché en overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="
              px-2 py-1 rounded text-xs font-mono font-semibold
              bg-bg-primary/90 text-text-primary
              shadow-sm
            "
          >
            {value.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
}
