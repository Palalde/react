import { Header, Container } from "@/components/layout";
import { EmployeeCard } from "@/features/employees/components";
import { MOCK_EMPLOYEES } from "@/data";

function App() {
  return (
    <div className="min-h-screen bg-bg-secondary text-text-secondary">
      <Header />
      <Container>
        <main className="py-8">
          <h2 className="text-xl text-text-primary mb-6">Employés</h2>
          <EmployeeCard
            employee={MOCK_EMPLOYEES[0]}
            onEdit={() => {}}
            onDelete={() => {}}
          />
        </main>
      </Container>
    </div>
  );
}

export default App;
