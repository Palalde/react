function Badge({ label, color = "gray", icon }) {
  // Couleurs prédéfinies pour les badges
  const colors = {
    gray: "bg-gray-100 text-gray-700 border-gray-300",
    blue: "bg-blue-100 text-blue-700 border-blue-300",
    green: "bg-green-100 text-green-700 border-green-300",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-300",
    red: "bg-red-100 text-red-700 border-red-300",
    purple: "bg-purple-100 text-purple-700 border-purple-300",
  };

  return (
    // Badge container
    <span
      className={`
      inline-flex items-center gap-1
      px-2 py-1 
      rounded-md 
      text-xs font-medium
      border
      ${colors[color]}
    `}
    >
      {/* Badge content */}
      {icon && <span>{icon}</span>}
      {label}
    </span>
  );
}

export default Badge;
