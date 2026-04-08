import { Header } from './components/Header';
import { SearchAssistant } from './components/SearchAssistant';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-50 selection:bg-emerald-500/30">
      <Header />
      
      <main className="max-w-7xl mx-auto px-8 py-20">
        <section className="text-center space-y-4 mb-12">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
            O Estilo Brasileiro <br /> 
            <span className="text-emerald-400">Elevado pela IA.</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Descreva o que você está procurando e deixa o PickWise encontrar as peças perfeitas para você
          </p>
        </section>

        <SearchAssistant />
      </main>
    </div>
  )
}

export default App;