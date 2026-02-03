import { useState } from "react";
import { Header, Container } from "@/components/layout";
import { EmployeeList } from "@/features/employees";
import { PlanningGrid } from "@/features/planning";
import { ShiftSelector } from "@/features/shifts";
import { DEFAULT_SHIFTS } from "@/constants";

function App() {
  // Zone de test ShiftSelector
  const [selectedShift, setSelectedShift] = useState("");

  return (
    <div className="min-h-screen bg-bg-secondary text-text-secondary">
      <Header />
      <Container>
        <main className="py-4 sm:py-6">
          {/* 🧪 Zone de test ShiftSelector */}
          <div className="mb-6 p-4 bg-bg-tertiary rounded-lg border border-border">
            <h3 className="text-text-primary font-semibold mb-2">
              🧪 Test ShiftSelector
            </h3>
            <ShiftSelector
              shifts={DEFAULT_SHIFTS}
              selectedShift={selectedShift}
              onChange={setSelectedShift}
            />
            <p className="text-sm mt-2">
              Sélection: {selectedShift || "aucune"}
            </p>
          </div>

          {/* Layout responsive: vertical mobile, horizontal desktop */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-start">
            {/* Sidebar: Liste des employés */}
            <aside className="w-full lg:w-64 lg:flex-shrink-0">
              <EmployeeList />
            </aside>

            {/* Main: Grille de planning */}
            <section className="flex-1 min-w-0">
              <PlanningGrid />
            </section>
          </div>
        </main>
      </Container>
    </div>
  );
}

export default App;
