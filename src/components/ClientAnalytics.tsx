
import { TrendingUp, Mail, Star, Clock } from 'lucide-react';

const ClientAnalytics = () => {
  const topClients = [
    {
      name: 'Empresa ABC Ltda',
      email: 'contato@abc.com',
      totalEmails: 45,
      thisWeek: 12,
      avgUrgency: 3.2,
      relationshipScore: 92,
      isVip: true,
      lastContact: '2h'
    },
    {
      name: 'João Silva',
      email: 'joao@cliente.com',
      totalEmails: 38,
      thisWeek: 8,
      avgUrgency: 2.8,
      relationshipScore: 85,
      isVip: false,
      lastContact: '5h'
    },
    {
      name: 'TechCorp Solutions',
      email: 'team@techcorp.com',
      totalEmails: 31,
      thisWeek: 15,
      avgUrgency: 4.1,
      relationshipScore: 78,
      isVip: true,
      lastContact: '1d'
    },
    {
      name: 'Maria Santos',
      email: 'maria@startup.com',
      totalEmails: 29,
      thisWeek: 6,
      avgUrgency: 2.5,
      relationshipScore: 71,
      isVip: false,
      lastContact: '3d'
    }
  ];

  const getUrgencyColor = (score: number) => {
    if (score >= 4) return 'text-red-400';
    if (score >= 3) return 'text-orange-400';
    if (score >= 2) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getRelationshipColor = (score: number) => {
    if (score >= 90) return 'bg-green-400/20 text-green-400';
    if (score >= 75) return 'bg-blue-400/20 text-blue-400';
    if (score >= 60) return 'bg-yellow-400/20 text-yellow-400';
    return 'bg-gray-400/20 text-gray-400';
  };

  return (
    <div className="premium-card rounded-xl p-6 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg border border-blue-400/20">
            <TrendingUp className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wide">Análise de Clientes</h3>
            <p className="text-sm text-gray-500">Contatos mais ativos</p>
          </div>
        </div>
      </div>

      {/* Client List */}
      <div className="space-y-4 relative z-10">
        {topClients.map((client, index) => (
          <div
            key={index}
            className="p-4 bg-gradient-to-r from-white/5 to-white/2 rounded-lg border border-white/10 hover:from-white/8 hover:to-white/4 transition-all duration-300 cursor-pointer group"
          >
            {/* Client Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-white group-hover:text-gray-200 transition-colors text-sm">
                    {client.name}
                  </h4>
                  {client.isVip && (
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  )}
                </div>
                <p className="text-xs text-gray-500">{client.email}</p>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getRelationshipColor(client.relationshipScore)}`}>
                {client.relationshipScore}%
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Total emails:</span>
                  <span className="text-white font-medium">{client.totalEmails}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Esta semana:</span>
                  <span className="text-white font-medium">{client.thisWeek}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Urgência média:</span>
                  <span className={`font-medium ${getUrgencyColor(client.avgUrgency)}`}>
                    {client.avgUrgency.toFixed(1)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Último contato:</span>
                  <span className="text-white font-medium">{client.lastContact}</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-3">
              <div className="w-full bg-white/10 rounded-full h-1.5">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-blue-600 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${client.relationshipScore}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-6 space-y-3 relative z-10">
        <button className="w-full py-2 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-lg border border-blue-400/20 text-blue-400 font-medium hover:from-blue-400/30 hover:to-blue-600/30 transition-all duration-300 text-sm">
          Ver Análise Completa
        </button>
        <button className="w-full py-2 bg-transparent border border-white/20 rounded-lg hover:bg-white/5 transition-all duration-300 text-white font-medium text-sm">
          Configurar Alertas
        </button>
      </div>

      {/* Subtle corner glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/10 via-blue-400/5 to-transparent rounded-bl-3xl"></div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
    </div>
  );
};

export default ClientAnalytics;
