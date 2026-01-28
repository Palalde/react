import { Header, Container } from "@/components/layout";
import { EmployeeList } from "@/features/employees/components";
import { PlanningGrid } from "@/features/planning";

function App() {
  return (
    <div className="min-h-screen bg-bg-secondary text-text-secondary">
      <Header />
      <Container>
        <main className="py-6">
          {/* Layout moderne: Sidebar + Main Grid */}
          <div className="flex gap-6 items-start">
            {/* Sidebar: Liste des employés */}
            <aside className="w-64 flex-shrink-0">
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
