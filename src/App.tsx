import { Header } from './components/Header';
import { SearchAssistant } from './components/SearchAssistant';
import { ProductCard } from './components/ProductCard';
import { products } from './services/mockData';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-50 selection:bg-emerald-500/30 pb-20">
      <Header />
      
      <main className="max-w-7xl mx-auto px-8 py-20">
        <section className="text-center space-y-4 mb-12">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
            O Estilo Brasileiro <br /> 
            <span className="text-emerald-400">Elevado pela IA.</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Descreva o que procura e deixe o PickWise encontrar as peças perfeitas para você.
          </p>
        </section>

        <SearchAssistant />

        {/* Nossa nova seção de Vitrine */}
        <section className="mt-32">
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
      </main>
    </div>
  )
}

export default App;