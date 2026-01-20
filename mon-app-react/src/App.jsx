import { Header, Container } from "@/components/layout";

function App() {
  return (
    <div className="min-h-screen bg-bg-secondary text-text-secondary">
      <Header />
      <Container>
        <main className="py-8">
          <h2 className="text-xl text-text-primary">
            Bienvenue dans ChefPlanning ! 🚀
          </h2>
        </main>
      </Container>
    </div>
  );
}

export default App;
