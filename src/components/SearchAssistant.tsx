import { Sparkles, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface SearchAssistantProps {
  onSearch: (prompt: string) => void;
  isLoading: boolean;
}

export const SearchAssistant = ({ onSearch, isLoading }: SearchAssistantProps) => {
  const [prompt, setPrompt] = useState('');
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; 
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  };

  useEffect(() => {
    handleInput();
  }, [prompt]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (prompt.trim().length > 2 && !isLoading) {
      onSearch(prompt);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Evita que pule de linha
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mt-12 px-4">
      <div className="relative group">
        <div className={`absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-20 transition duration-1000 ${isLoading ? 'animate-pulse opacity-60' : 'group-focus-within:opacity-40'}`}></div>
        
        <div className="relative flex items-end bg-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden transition-all">
          <div className="pl-5 pb-[22px] text-emerald-400">
            {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Sparkles size={20} />}
          </div>
        
          <textarea 
            ref={textareaRef}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            rows={1}
            placeholder="Ex: Quero um look para um festival de noite..."
            className="w-full bg-transparent border-none py-5 px-4 text-zinc-100 placeholder:text-zinc-500 focus:outline-none text-lg disabled:opacity-50 resize-none overflow-y-auto"
            style={{ minHeight: '68px', maxHeight: '200px' }}
          />
          
          <button 
            type="submit"
            disabled={isLoading || prompt.trim().length < 3}
            className="bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-600 disabled:text-zinc-400 text-zinc-900 font-bold py-3 px-6 mr-2 mb-2 rounded-xl transition-all active:scale-95 whitespace-nowrap h-[52px]"
          >
            {isLoading ? 'Buscando...' : 'Perguntar'}
          </button>
        </div>
      </div>
      <p className="text-center text-zinc-500 text-xs mt-4 flex items-center justify-center gap-2">
        <span>Pressione <strong>Enter</strong> para enviar</span>
        <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
        <span><strong>Shift + Enter</strong> para quebrar linha</span>
      </p>
    </form>
  );
};