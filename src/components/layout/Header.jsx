import { ThemeToggle } from "@/components/ui";

function Header() {
  return (
    <header className="bg-bg-primary border-b border-border px-3 sm:px-6 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold text-text-primary">
          🗓️ ChefPlanning
        </h1>
        {/* Zone boutons / actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
