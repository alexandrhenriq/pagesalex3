import PorcoUm from '../assets/Porquinho1.png';
import PorcoDois from '../assets/Porquinho2.png';
import PorcoTres from '../assets/Porquinho3.png';
import PorcoQuatro from '../assets/Porquinho4.png';
import rosa from '../assets/rosa.png';

export function Passos() {
  return (
    <div className="flex flex-col gap-16 px-10 py-10 text-[var(--cor-azul-marinho)]">

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="relative w-[260px] md:w-[280px]">
          <img
            src={rosa}
            alt="fundo rosa"
            className="absolute -bottom-4 -left-4 w-full h-full rounded-[32px] -z-10"
          />
          <img
            src={PorcoUm}
            alt="Porquinho 1"
            className="rounded-[32px] w-full h-full object-cover"
          />
        </div>

        <div className="max-w-md h-full flex flex-col justify-center text-center">
          <h2 className="text-pink-600 font-bold italic text-lg mb-2">PASSO 1</h2>
          <p className="font-semibold mb-2">Ligue seu porquinho!</p>
          <p className="text-sm leading-relaxed">
            Encontre o botão lateral e pressione para ligar o dispositivo. Pronto, seu porquinho
            já está acordado e pronto para ajudar você a economizar!
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
        <div className="max-w-md h-full flex flex-col justify-center text-center">
          <h2 className="text-pink-600 font-bold italic text-lg mb-2">PASSO 2</h2>
          <p className="font-semibold mb-2">Conecte e cadastre-se</p>
          <p className="text-sm leading-relaxed">
            Ative o Bluetooth do seu celular, conecte ao porquinho e faça o cadastro no aplicativo.
            Em poucos toques, você já pode começar a usar.
          </p>
        </div>
        <div className="relative w-[250px] md:w-[280px]">
          <img
            src={rosa}
            alt="fundo rosa"
            className="absolute -bottom-3 -right-3 w-full h-full rounded-[32px] -z-10"
          />
          <img
            src={PorcoDois}
            alt="Porquinho 2"
            className="rounded-[32px] w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="relative w-[250px] md:w-[280px]">
          <img
            src={rosa}
            alt="fundo rosa"
            className="absolute -bottom-3 -right-3 w-full h-full rounded-[32px] -z-10"
          />
          <img
            src={PorcoTres}
            alt="Porquinho 3"
            className="rounded-[32px] w-full h-full object-cover"
          />
        </div>
        <div className="max-w-md h-full flex flex-col justify-center text-center">
          <h2 className="text-pink-600 font-bold italic text-lg mb-2">PASSO 3</h2>
          <p className="font-semibold mb-2">Comece a economizar!</p>
          <p className="text-sm leading-relaxed">
            Agora que está tudo pronto, você já pode usar o porquinho para guardar dinheiro e
            acompanhar sua economia pelo app.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
        <div className="max-w-md h-full flex flex-col justify-center text-center">
          <h2 className="text-pink-600 font-bold italic text-lg mb-2">PASSO 4</h2>
          <p className="font-semibold mb-2">Saque quando quiser</p>
          <p className="text-sm leading-relaxed">
            Quando precisar, você pode abrir seu porquinho e sacar o valor economizado.
            E pode começar tudo de novo!
          </p>
        </div>
        <div className="relative w-[250px] md:w-[280px]">
          <img
            src={rosa}
            alt="fundo rosa"
            className="absolute -bottom-3 -right-3 w-full h-full rounded-[32px] -z-10"
          />
          <img
            src={PorcoQuatro}
            alt="Porquinho 4"
            className="rounded-[32px] w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
