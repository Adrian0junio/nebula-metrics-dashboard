
import { ChevronRight } from 'lucide-react';

const SubscriptionSection = () => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Assinaturas ativas</h3>
        <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-green-400 transition-colors">
          Ver todas
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="text-center py-8">
        <p className="text-gray-500">Nenhuma assinatura ativa</p>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-50"></div>
    </div>
  );
};

export default SubscriptionSection;
