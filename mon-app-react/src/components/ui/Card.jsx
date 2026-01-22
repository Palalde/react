function Card({ title, children, className = "" }) {
  return (
    // Card container
    <div
      className={`
      bg-bg-primary 
      border border-border 
      rounded-lg 
      shadow-sm 
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
