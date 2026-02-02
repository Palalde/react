import { Header, Container } from "@/components/layout";
import { EmployeeList } from "@/features/employees/components";
import { PlanningGrid } from "@/features/planning";

function App() {
  return (
    <div className="min-h-screen bg-bg-secondary text-text-secondary">
      <Header />
      <Container>
        <main className="py-4 sm:py-6">
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
