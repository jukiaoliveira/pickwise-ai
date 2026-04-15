import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Header } from './components/Header';
import { SearchAssistant } from './components/SearchAssistant';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { products } from './services/mockData';
import { getRecommendations } from './services/ai';
import type { Recommendation } from './types';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

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

  const handleClear = () => {
    setHasSearched(false);
    setRecommendations([]);
  };

  return (
    // 1. Mudamos o fundo para o Verde Amazônia e a fonte padrão para Baloo
    <div className="min-h-screen bg-br-dark text-br-light font-baloo selection:bg-br-green/30 pb-20">
      <Header />
      <CartDrawer />
      
      <main className="max-w-7xl mx-auto px-8 py-12 md:py-20">
        <section className="text-center space-y-4 mb-12">
          {/* 2. O título gigante ganha a fonte Bebas Neue e um espaçamento de letras (tracking-wider) */}
          <h2 className="font-bebas text-6xl md:text-8xl tracking-wider text-br-light">
            O ESTILO BRASILEIRO <br /> 
            {/* O Amarelo Caju dá o contraste perfeito no fundo escuro */}
            <span className="text-br-yellow">ELEVADO PELA IA.</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-xl">
            Descreva o seu rolê e deixe o PickWise encontrar as peças perfeitas pro seu estilo.
          </p>
        </section>

        <SearchAssistant onSearch={handleSearch} isLoading={isLoading} />

        {hasSearched ? (
          <section className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bebas text-4xl tracking-wide text-br-light">RECOMENDAÇÕES DA IA</h3>
              <button 
                onClick={handleClear}
                className="text-br-green text-sm hover:underline font-bold uppercase tracking-wider"
              >
                Voltar pra vitrine
              </button>
            </div>

            {isLoading ? (
              <div className="w-full py-20 flex flex-col items-center justify-center text-br-light space-y-4 animate-pulse">
                {/* Loader usando as cores do Brasil */}
                <div className="w-12 h-12 border-4 border-br-blue/30 border-t-br-blue rounded-full animate-spin"></div>
                <p className="text-lg font-medium">A IA tá mapeando o seu estilo...</p>
              </div>
            ) : recommendations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recommendations.map((rec) => (
                  <div key={rec.product.id} className="flex flex-col gap-4">
                    <ProductCard product={rec.product} />
                    <div className="bg-br-card/80 border border-br-green/30 p-4 rounded-xl flex gap-3 shadow-lg shadow-br-green/5">
                      <Sparkles size={20} className="text-br-yellow flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-br-light leading-relaxed">
                        <strong className="text-br-green block mb-1 font-bold text-base">Por que escolhemos essa peça?</strong>
                        {rec.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full py-20 flex flex-col items-center justify-center bg-br-card/50 border border-br-green/20 rounded-2xl">
                <p className="font-bebas text-3xl tracking-wide text-br-yellow mb-2">Putz, não achamos a peça perfeita.</p>
                <p className="text-zinc-400 text-lg">Tenta buscar por "festival", "frio" ou "conjunto".</p>
              </div>
            )}
          </section>
        ) : (
          <section className="mt-32 transition-all">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bebas text-4xl tracking-wide text-br-light">DESTAQUES DO CORRE</h3>
              <span className="text-br-yellow font-bold text-lg">{products.length} itens</span>
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