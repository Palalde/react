import { useState } from "react";
import { Header, Container } from "@/components/layout";
import { EmployeeList } from "@/features/employees/components";
import { PlanningGrid } from "@/features/planning";
import { Modal, Button, Input } from "@/components/ui";

function App() {
  // 🧪 TEST Modal + Input (à retirer après validation)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testName, setTestName] = useState("");

  return (
    <div className="min-h-screen bg-bg-secondary text-text-secondary">
      <Header />
      <Container>
        {/* 🧪 ZONE DE TEST - À RETIRER APRÈS */}
        <div className="p-4 bg-accent-soft border border-accent rounded-lg mb-4">
          <p className="text-sm text-text-secondary mb-2">
            🧪 Test Modal + Input (Phase 5 - Task 5.1.2)
          </p>
          <Button onClick={() => setIsModalOpen(true)}>
            Ouvrir Modal de Test
          </Button>
        </div>

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

      {/* 🧪 Modal de Test */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Test Input + Modal"
        size="md"
      >
        <div className="space-y-4">
          <Input
            label="Nom complet"
            value={testName}
            onChange={setTestName}
            placeholder="Ex: Jean Dupont"
          />

          <Input
            label="Email"
            type="email"
            value=""
            onChange={() => {}}
            placeholder="jean@example.com"
          />

          <Input
            label="Avec erreur"
            value=""
            onChange={() => {}}
            error="Ce champ est obligatoire"
          />

          <div className="flex gap-2 justify-end pt-2">
            <Button onClick={() => setIsModalOpen(false)} variant="secondary">
              Annuler
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>Valider</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
