function Badge({ label, color = "default", icon, size = "sm" }) {
  // Couleurs 100% Design System (pas de couleurs Tailwind hardcodées)
  const colors = {
    default: "bg-bg-tertiary text-text-secondary border-border",
    accent: "bg-accent/10 text-accent border-accent/30",
    success: "bg-success/10 text-success border-success/30",
    warning: "bg-warning/10 text-warning border-warning/30",
    danger: "bg-danger/10 text-danger border-danger/30",
    // Legacy aliases (pour compatibilité)
    gray: "bg-bg-tertiary text-text-secondary border-border",
    blue: "bg-accent/10 text-accent border-accent/30",
    green: "bg-success/10 text-success border-success/30",
    yellow: "bg-warning/10 text-warning border-warning/30",
    red: "bg-danger/10 text-danger border-danger/30",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
  };

  return (
    // Badge container
    <span
      className={`
      inline-flex items-center gap-1
      rounded-md 
      font-medium
      border
      transition-colors duration-200
      ${colors[color] || colors.default}
      ${sizes[size]}
    `}
    >
      {/* Badge content */}
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {label}
    </span>
  );
}

export default Badge;
