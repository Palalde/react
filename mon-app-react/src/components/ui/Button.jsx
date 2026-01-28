function Button({
  // Props
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) {
  // Variants for button styles
  const variants = {
    primary: "bg-accent hover:bg-accent-hover text-white",
    secondary: "bg-bg-tertiary hover:bg-border text-text-primary",
    danger: "bg-danger hover:bg-red-600 text-white",
    ghost: "bg-transparent hover:bg-bg-tertiary text-text-primary",
  };

  // Sizes for button padding and font size (min 44px touch target)
  const sizes = {
    sm: "px-3 py-2 text-sm min-h-[44px]",
    md: "px-4 py-2.5 text-base min-h-[44px]",
    lg: "px-6 py-3 text-lg min-h-[48px]",
  };

  //   Render the button with appropriate styles
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-lg font-medium transition-all duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        active:scale-[0.98]
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
