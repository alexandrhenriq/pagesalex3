import cash from '../assets/cash.png';
import passo from '../assets/passo-passo.png';
import produtos from '../assets/produtos.png';
import equipe from '../assets/equipe.png';
import artigos from '../assets/artigos.png';
import jogo from '../assets/jogo.png';

export function MenuLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Menu Lateral */}
      <div className="w-64 bg-[var(--cor-azul-marinho)] text-white flex flex-col justify-start p-6">
        {/* Logo */}
        <div className="mb-6 pb-6 border-b border-white">
          <img
            src={cash}
            alt="Cash Coin Logo"
            className="w-[150px] h-auto mx-auto object-contain"
          />
        </div>

        {/* Itens de Menu */}
        <div className="space-y-6 mt-4">
          <MenuItem icon={passo} text="Passo a passo" active />
          <MenuItem icon={produtos} text="Produtos" />
          <MenuItem icon={equipe} text="Equipe" />
          <MenuItem icon={artigos} text="Artigos" />
          <MenuItem icon={jogo} text="Jogo" />
        </div>

        {/* Rodapé */}
        <div className="mt-auto pt-6 border-t border-white flex items-center space-x-3 text-sm">
          <div className="w-8 h-8 rounded-full bg-gray-400 shrink-0" />
          <span>Usuário: usuario@email.com</span>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 overflow-y-auto p-4 bg-[var(--cor-azul-marinho)]">
        <div className="bg-[var(--cor-bege)] rounded-[32px] p-6 min-h-full">
          {children}
        </div>
      </div>
    </div>
  );
}

function MenuItem({ icon, text, active = false }) {
  return (
    <div
      className={`flex items-center space-x-3 cursor-pointer hover:text-pink-400 transition px-2 ${
        active ? 'border-l-4 border-pink-400' : 'border-l-4 border-transparent'
      }`}
    >
      <img
        src={icon}
        alt=""
        className="w-[22px] h-[22px] object-contain transition-all duration-300"
      />
      <p className="whitespace-nowrap">{text}</p>
    </div>
  );
}

