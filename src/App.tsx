import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Header } from './components/Header';
import { SearchAssistant } from './components/SearchAssistant';
import { ProductCard } from './components/ProductCard';
import { products } from './services/mockData';
import { CartDrawer } from './components/CartDrawer';
import { getRecommendations } from './services/ai';
import type { Recommendation } from './types';

function App() {
  // 1. Definição dos Estados
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  // 2. Função que lida com a busca
  const handleSearch = async (prompt: string) => {
    setIsLoading(true);
    setHasSearched(true);
    
    try {
      const results = await getRecommendations(prompt);
      setRecommendations(results);
    } catch (error) {
      console.error("Erro na IA:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Função para limpar a busca e voltar pra vitrine
  const handleClear = () => {
    setHasSearched(false);
    setRecommendations([]);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-50 selection:bg-emerald-500/30 pb-20">
      <Header />
      <CartDrawer />
      
      <main className="max-w-7xl mx-auto px-8 py-12 md:py-20">
        <section className="text-center space-y-4 mb-12">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
            O Estilo Brasileiro <br /> 
            <span className="text-emerald-400">Elevado pela IA.</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Descreva o que procura e deixe o PickWise encontrar as peças perfeitas para o seu mood.
          </p>
        </section>

        {/* Passamos as props para o nosso componente */}
        <SearchAssistant onSearch={handleSearch} isLoading={isLoading} />

        {/* 3. Renderização Condicional: Resultado da IA vs Vitrine Padrão */}
        {hasSearched ? (
          <section className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold tracking-tight">Recomendações da IA</h3>
              <button 
                onClick={handleClear}
                className="text-emerald-400 text-sm hover:underline font-medium"
              >
                Voltar para a vitrine
              </button>
            </div>

            {isLoading ? (
              // Estado visual de Loading
              <div className="w-full py-20 flex flex-col items-center justify-center text-zinc-500 space-y-4 animate-pulse">
                <div className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
                <p>A IA está analisando seu perfil e cruzando dados...</p>
              </div>
            ) : recommendations.length > 0 ? (
              // Exibe os produtos com a justificativa
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recommendations.map((rec) => (
                  <div key={rec.product.id} className="flex flex-col gap-4">
                    <ProductCard product={rec.product} />
                    {/* Balão de Justificativa da IA */}
                    <div className="bg-emerald-950/30 border border-emerald-500/20 p-4 rounded-xl flex gap-3">
                      <Sparkles size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        <strong className="text-emerald-400 block mb-1">Por que escolhemos esta peça?</strong>
                        {rec.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Estado Vazio (Nada encontrado)
              <div className="w-full py-20 flex flex-col items-center justify-center bg-zinc-800/30 border border-zinc-800 rounded-2xl">
                <p className="text-xl font-bold text-zinc-300 mb-2">Hmm, não encontramos a peça perfeita.</p>
                <p className="text-zinc-500">Tente buscar por "festival", "frio" ou "corta-vento".</p>
              </div>
            )}
          </section>
        ) : (
          // Vitrine Padrão
          <section className="mt-32 transition-all">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold tracking-tight">Destaques da Coleção</h3>
              <span className="text-zinc-500 text-sm">{products.length} itens</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App;