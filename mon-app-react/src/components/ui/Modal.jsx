import { createPortal } from "react-dom";

export default function Modal({
  // Props
  isOpen,
  onClose,
  title,
  children,
  size = "md" /* "sm" | "md" | "lg" */,
}) {
  // si le modal n'est pas ouvert, ne rien rendre
  if (!isOpen) return null;

  // Classes de taille pour le modal
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  };

  const modalContent = (
    // Backdrop
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      {/* Container centré avec animations */}
      <div
        // Card du modal
        onClick={(e) => e.stopPropagation()}
        className={`bg-bg-tertiary rounded-lg shadow-xl w-full ${sizeClasses[size]} transform transition-all`}
      >
        {/* Header du modal */}
        {title && (
          <div className="flex justify-between items-center p-4 border-b border-border">
            {/* title */}
            <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
            {/* Bouton de fermeture */}
            <button
              onClick={onClose}
              className="text-text-muted hover:text-text-primary transition-colors p-1 rounded hover:bg-bg-secondary"
              aria-label="Fermer"
            >
              ✕
            </button>
          </div>
        )}

        {/* Body du modal */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
