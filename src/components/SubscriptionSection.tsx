
import { ChevronRight } from 'lucide-react';

const SubscriptionSection = () => {
  return (
    <div className="premium-card rounded-xl p-6 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <h3 className="text-lg font-semibold text-white tracking-wide">Assinaturas ativas</h3>
        <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">
          Ver todas
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="text-center py-8 relative z-10">
        <p className="text-gray-500 font-medium">Nenhuma assinatura ativa</p>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3"></div>
      
      {/* Corner highlight */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/3 to-transparent rounded-bl-3xl"></div>
    </div>
  );
};

export default SubscriptionSection;
