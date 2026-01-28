function Badge({ label, color = "default", icon, size = "sm" }) {
  // Couleurs utilisant le Design System
  const colors = {
    default: "bg-bg-tertiary text-text-secondary border-border",
    accent: "bg-accent-soft text-accent border-accent/30",
    success: "bg-green-100 text-success border-success/30",
    warning: "bg-yellow-100 text-warning border-warning/30",
    danger: "bg-red-100 text-danger border-danger/30",
    // Legacy support
    gray: "bg-bg-tertiary text-text-secondary border-border",
    blue: "bg-accent-soft text-accent border-accent/30",
    green: "bg-green-100 text-success border-success/30",
    yellow: "bg-yellow-100 text-warning border-warning/30",
    red: "bg-red-100 text-danger border-danger/30",
    purple: "bg-purple-100 text-purple-700 border-purple-300",
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
