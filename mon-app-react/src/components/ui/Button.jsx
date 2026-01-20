function Button({
  // Props
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}) {
  // Variants for button styles
  const variants = {
    primary: "bg-accent hover:bg-accent-hover text-white",
    secondary: "bg-bg-tertiary hover:bg-border text-text-primary",
    danger: "bg-danger hover:bg-red-600 text-white",
  };

  // Sizes for button padding and font size
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  //   Render the button with appropriate styles
  return (
    <button
      onClick={onClick}
      className={`rounded-lg font-medium transition-colors
            ${variants[variant]} 
            ${sizes[size]} 
            ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
