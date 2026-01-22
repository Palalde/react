import { Header, Container } from "@/components/layout";
import { EmployeeList } from "@/features/employees/components";

function App() {
  return (
    <div className="min-h-screen bg-bg-secondary text-text-secondary">
      <Header />
      <Container>
        <main className="py-8">
          <EmployeeList />
        </main>
      </Container>
    </div>
  );
}

export default App;
