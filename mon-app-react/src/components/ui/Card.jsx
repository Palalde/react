function Card({ title, children, className = "", interactive = false }) {
  return (
    // Card container
    <div
      className={`
      bg-bg-primary 
      border border-border 
      rounded-lg 
      shadow-sm
      transition-all duration-200
      ${interactive ? "hover:shadow-md hover:border-accent/50 cursor-pointer" : ""}
      ${className}
    `}
    >
      {/* Card header */}
      {title && (
        <div className="px-4 py-3 border-b border-border">
          <h3 className="font-semibold text-text-primary">{title}</h3>
        </div>
      )}
      {/* Card body */}
      <div className="p-4">{children}</div>
    </div>
  );
}

export default Card;
