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
  // Base styles communes à tous les boutons
  const baseStyles = `
    rounded-xl font-semibold
    transition-all duration-300 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    active:scale-[0.97]
  `;

  // Variants avec Liquid Glass
  const variants = {
    // Primary: Liquid glass avec glow subtil
    primary: `
      bg-accent/80 hover:bg-accent/90
      text-white font-semibold
      border border-white/30
      shadow-sm shadow-accent/15 hover:shadow-md hover:shadow-accent/20
      backdrop-blur-md
      hover:-translate-y-0.5
    `,

    // Secondary: Outline liquid glass
    secondary: `
      bg-white/5 hover:bg-white/10
      text-text-primary
      border border-border/80 hover:border-accent/40
      shadow-sm hover:shadow-md hover:shadow-accent/10
      backdrop-blur-md
      hover:-translate-y-0.5
    `,

    // Danger: Rouge liquid glass
    danger: `
      bg-danger/80 hover:bg-danger/90
      text-white font-semibold
      border border-red-300/30
      shadow-sm shadow-danger/15 hover:shadow-md hover:shadow-danger/20
      backdrop-blur-md
      hover:-translate-y-0.5
    `,

    // Ghost: Visible mais discret
    ghost: `
      bg-bg-tertiary/40 hover:bg-bg-tertiary/60
      text-text-secondary hover:text-text-primary
      border border-border/50 hover:border-border
      backdrop-blur-md
      hover:-translate-y-0.5
    `,
  };

  // Sizes avec touch targets accessibles
  const sizes = {
    icon: "p-2 text-lg min-w-[44px] min-h-[44px] aspect-square", // Bouton carré pour émojis/icônes
    sm: "px-3 py-2 text-sm min-h-[44px]",
    md: "px-4 py-2.5 text-base min-h-[44px]",
    lg: "px-6 py-3 text-lg min-h-[48px]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
      `.trim()}
    >
      {children}
    </button>
  );
}

export default Button;
