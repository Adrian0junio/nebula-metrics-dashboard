
import { useState } from 'react';
import { Search, Filter, Mail, Clock, User, Star, Archive, Trash2 } from 'lucide-react';

const EmailList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const emails = [
    {
      id: '1',
      subject: 'Proposta de parceria estratégica',
      sender: 'Carlos Alberto',
      email: 'carlos@empresa.com',
      snippet: 'Gostaria de discutir uma proposta de parceria que pode ser muito interessante...',
      time: '14:30',
      isRead: false,
      isStarred: false,
      urgencyScore: 3,
      category: 'Business'
    },
    {
      id: '2',
      subject: 'Relatório mensal de vendas',
      sender: 'Ana Costa',
      email: 'ana@vendas.com',
      snippet: 'Segue em anexo o relatório completo das vendas do mês de novembro...',
      time: '13:45',
      isRead: true,
      isStarred: true,
      urgencyScore: 2,
      category: 'Reports'
    },
    {
      id: '3',
      subject: 'Urgente: Aprovação de orçamento',
      sender: 'Roberto Silva',
      email: 'roberto@financeiro.com',
      snippet: 'Preciso da sua aprovação urgente para o orçamento do projeto X...',
      time: '12:15',
      isRead: false,
      isStarred: false,
      urgencyScore: 5,
      category: 'Finance'
    }
  ];

  const filteredEmails = emails.filter(email => {
    const matchesSearch = email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         email.sender.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedFilter === 'unread') return !email.isRead && matchesSearch;
    if (selectedFilter === 'starred') return email.isStarred && matchesSearch;
    if (selectedFilter === 'urgent') return email.urgencyScore >= 4 && matchesSearch;
    
    return matchesSearch;
  });

  const getUrgencyColor = (score: number) => {
    if (score >= 5) return 'bg-red-400';
    if (score >= 4) return 'bg-orange-400';
    if (score >= 3) return 'bg-yellow-400';
    return 'bg-green-400';
  };

  return (
    <div className="premium-card rounded-xl p-6 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <h3 className="text-lg font-semibold text-white tracking-wide">E-mails Recentes</h3>
        <div className="flex items-center gap-2">
          <select 
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-white/30"
          >
            <option value="all">Todos</option>
            <option value="unread">Não lidos</option>
            <option value="starred">Favoritos</option>
            <option value="urgent">Urgentes</option>
          </select>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6 relative z-10">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar emails..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors"
        />
      </div>

      {/* Email List */}
      <div className="space-y-2 relative z-10">
        {filteredEmails.map((email) => (
          <div
            key={email.id}
            className={`p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all duration-300 cursor-pointer group ${
              !email.isRead ? 'bg-white/5' : 'bg-transparent'
            }`}
          >
            <div className="flex items-start gap-3">
              {/* Urgency Indicator */}
              <div className={`w-2 h-2 rounded-full mt-2 ${getUrgencyColor(email.urgencyScore)}`}></div>
              
              {/* Email Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <h4 className={`font-medium text-sm group-hover:text-white transition-colors ${
                      !email.isRead ? 'text-white' : 'text-gray-300'
                    }`}>
                      {email.sender}
                    </h4>
                    {email.isStarred && (
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{email.time}</span>
                </div>
                
                <p className={`text-sm mb-2 group-hover:text-gray-200 transition-colors ${
                  !email.isRead ? 'text-gray-200' : 'text-gray-400'
                }`}>
                  {email.subject}
                </p>
                
                <p className="text-xs text-gray-500 line-clamp-1">
                  {email.snippet}
                </p>
                
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-gray-600 bg-gray-700/50 px-2 py-1 rounded">
                    {email.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    Urgência: {email.urgencyScore}/5
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white">
                  <Star className="w-4 h-4" />
                </button>
                <button className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white">
                  <Archive className="w-4 h-4" />
                </button>
                <button className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-red-400">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center relative z-10">
        <button className="text-sm text-gray-400 hover:text-white transition-colors">
          Carregar mais emails...
        </button>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3"></div>
    </div>
  );
};

export default EmailList;
