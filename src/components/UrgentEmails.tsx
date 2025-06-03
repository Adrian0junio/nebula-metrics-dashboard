
import { AlertTriangle, Clock, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UrgentEmails = () => {
  const urgentEmails = [
    {
      id: '1',
      subject: 'Problema crítico no servidor de produção',
      sender: 'João Silva',
      email: 'joao@empresa.com',
      urgencyScore: 5,
      timeAgo: '15 min',
      category: 'Técnico',
      keyPoints: ['Servidor offline', 'Impacto nos clientes', 'Necessita ação imediata']
    },
    {
      id: '2',
      subject: 'Reunião de emergência - Projeto X',
      sender: 'Maria Santos',
      email: 'maria@cliente.com',
      urgencyScore: 4,
      timeAgo: '32 min',
      category: 'Reunião',
      keyPoints: ['Mudança de cronograma', 'Aprovação pendente', 'Prazo apertado']
    },
    {
      id: '3',
      subject: 'Cancelamento de contrato - Cliente VIP',
      sender: 'Pedro Costa',
      email: 'pedro@vip.com',
      urgencyScore: 5,
      timeAgo: '1h',
      category: 'Comercial',
      keyPoints: ['Cliente insatisfeito', 'Valor alto', 'Risco de churn']
    }
  ];

  const getUrgencyColor = (score: number) => {
    if (score >= 5) return 'text-red-400 bg-red-400/10 border-red-400/20';
    if (score >= 4) return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
    return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
  };

  return (
    <div className="premium-card rounded-xl p-6 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-red-400/20 to-red-600/20 rounded-lg border border-red-400/20">
            <AlertTriangle className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wide">E-mails Urgentes</h3>
            <p className="text-sm text-gray-500">Requerem atenção imediata</p>
          </div>
        </div>
        <Link 
          to="/emails?filter=urgent"
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
        >
          Ver todos
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Urgent Emails List */}
      <div className="space-y-4 relative z-10">
        {urgentEmails.map((email) => (
          <div
            key={email.id}
            className="p-4 bg-gradient-to-r from-white/5 to-white/2 rounded-lg border border-white/10 hover:from-white/8 hover:to-white/4 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${getUrgencyColor(email.urgencyScore)}`}>
                    Urgência {email.urgencyScore}
                  </span>
                  <span className="text-xs text-gray-500">{email.category}</span>
                </div>
                <h4 className="font-medium text-white group-hover:text-gray-200 transition-colors line-clamp-1">
                  {email.subject}
                </h4>
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                  <User className="w-3 h-3" />
                  <span>{email.sender}</span>
                  <span>•</span>
                  <Clock className="w-3 h-3" />
                  <span>{email.timeAgo}</span>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-1">
              <p className="text-xs text-gray-500 font-medium">Pontos-chave:</p>
              <ul className="text-xs text-gray-400 space-y-1">
                {email.keyPoints.slice(0, 2).map((point, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="mt-6 relative z-10">
        <Link
          to="/emails?filter=urgent"
          className="w-full py-3 bg-gradient-to-r from-red-400/20 to-red-600/20 rounded-lg border border-red-400/20 text-red-400 font-medium hover:from-red-400/30 hover:to-red-600/30 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <AlertTriangle className="w-4 h-4" />
          Ver Todos os Urgentes
        </Link>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3"></div>
      
      {/* Corner highlight */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-400/10 to-transparent rounded-bl-3xl"></div>
    </div>
  );
};

export default UrgentEmails;
