
import Sidebar from '../components/Sidebar';

const Payments = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Sidebar />
      
      <div className="ml-64">
        <header className="border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-sm">
          <div className="px-8 py-6">
            <h1 className="text-3xl font-bold text-white">Pagamentos</h1>
          </div>
        </header>

        <main className="p-8">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50 text-center">
            <h2 className="text-xl font-semibold text-white mb-4">Página de Pagamentos</h2>
            <p className="text-gray-400">Conteúdo dos pagamentos será implementado aqui.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Payments;
