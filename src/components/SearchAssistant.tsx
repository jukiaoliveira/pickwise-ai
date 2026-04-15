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
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto px-4">
      <div className="relative group mt-2">
        <div className={`absolute -inset-0.5 bg-gradient-to-r from-br-green to-br-blue rounded-2xl blur opacity-30 transition duration-1000 ${isLoading ? 'animate-pulse opacity-70' : 'group-focus-within:opacity-60'}`}></div>
        
        <div className="relative flex items-end bg-br-card rounded-2xl border border-br-green/30 overflow-hidden transition-all shadow-xl shadow-br-dark/50">
          <div className="pl-5 pb-[22px] text-br-green">
            {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Sparkles size={20} />}
          </div>
          
          <textarea 
            ref={textareaRef}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            rows={1}
            placeholder="Ex: Quero um look autêntico para um festival à noite..."
            className="w-full bg-transparent border-none py-5 px-4 text-br-light placeholder:text-zinc-500 focus:outline-none text-lg disabled:opacity-50 resize-none overflow-y-auto font-baloo"
            style={{ minHeight: '68px', maxHeight: '200px' }}
          />
          
          <button 
            type="submit"
            disabled={isLoading || prompt.trim().length < 3}
            className="bg-br-yellow hover:bg-yellow-400 disabled:bg-zinc-800 disabled:text-zinc-500 text-br-dark font-bebas text-2xl tracking-widest py-2 px-8 mr-2 mb-2 rounded-xl transition-all active:scale-95 whitespace-nowrap h-[52px] uppercase shadow-md shadow-br-yellow/20 disabled:shadow-none"
          >
            {isLoading ? 'Buscando' : 'Mandar'}
          </button>
        </div>
      </div>
      <p className="text-center text-zinc-500 text-sm mt-4 flex items-center justify-center gap-2 font-baloo">
        <span>Aperte <strong className="text-br-light">Enter</strong> para enviar</span>
        <span className="w-1 h-1 bg-br-green/50 rounded-full"></span>
        <span><strong className="text-br-light">Shift + Enter</strong> para quebrar linha</span>
      </p>
    </form>
  );
};