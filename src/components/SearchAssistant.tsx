import { Sparkles } from 'lucide-react';

export const SearchAssistant = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-12 px-4">
      <div className="relative group">
        {/* Efeito de brilho ao fundo para parecer "AI" */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-1000"></div>
        
        <div className="relative flex items-center bg-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden">
          <div className="pl-5 text-emerald-400">
            <Sparkles size={20} />
          </div>
          <input 
            type="text"
            placeholder="Ex: Quero um look streetwear para um festival até 300€..."
            className="w-full bg-transparent border-none py-5 px-4 text-zinc-100 placeholder:text-zinc-500 focus:outline-none text-lg"
          />
          <button className="bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-bold py-3 px-6 mr-2 rounded-xl transition-all active:scale-95">
            Perguntar
          </button>
        </div>
      </div>
      <p className="text-center text-zinc-500 text-sm mt-4">
        O nosso assistente utiliza IA para encontrar as melhores peças para o teu estilo.
      </p>
    </div>
  );
};