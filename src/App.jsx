import { Passos } from "./components/Passos";
import { MenuLayout } from "./components/Menu";

export function App() {
  return (
    <div className="min-h-screen">
      {/* BARRA SUPERIOR AZUL DE PONTA A PONTA */}
      <div className="h-4 bg-[var(--cor-azul-marinho)] w-full" />

      {/* CONTEÚDO COM MENU + PÁGINA */}
      <MenuLayout>
        <Passos />
      </MenuLayout>
    </div>


  );
}

export default App;