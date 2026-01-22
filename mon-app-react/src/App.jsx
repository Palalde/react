import { Header, Container } from "@/components/layout";
import { Button, Card } from "@/components/ui";

function App() {
  return (
    <div className="min-h-screen bg-bg-secondary text-text-secondary">
      <Header />
      <Container>
        <main className="py-8">
          <h2 className="text-xl text-text-primary">
            Bienvenue dans ChefPlanning ! 🚀
          </h2>
          <Card title="Exemple de carte">
            <p>Exemple 1</p>
          </Card>
          <Card title="Deuxième carte">
            <p>Exemple 2</p>
          </Card>
          <Button
            variant="primary"
            size="sm"
            onClick={() => alert("Button clicked!")}
          >
            Click Me
          </Button>
        </main>
      </Container>
    </div>
  );
}

export default App;
