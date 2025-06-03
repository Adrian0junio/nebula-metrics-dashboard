
import { useState } from 'react';
import { HardDrive, Mail, AlertTriangle, Users, Calendar, Search, Filter, RefreshCw } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import MetricCard from '../components/MetricCard';
import EmailList from '../components/EmailList';
import UrgentEmails from '../components/UrgentEmails';
import ClientAnalytics from '../components/ClientAnalytics';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('today');
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    // TODO: Implement refresh logic
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/2 rounded-full blur-2xl"></div>
      </div>

      <Sidebar />
      
      {/* Main Content */}
      <div className="ml-64 relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard</h1>
                <p className="text-gray-400 mt-1">Visão geral dos seus emails e métricas</p>
              </div>
              
              <div className="flex items-center gap-4">
                <select 
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                >
                  <option value="today">Hoje</option>
                  <option value="week">Esta semana</option>
                  <option value="month">Este mês</option>
                  <option value="quarter">Este trimestre</option>
                </select>
                
                <button
                  onClick={handleRefresh}
                  disabled={refreshing}
                  className="p-2 bg-gradient-to-br from-white/20 to-white/10 rounded-lg border border-white/20 hover:from-white/30 hover:to-white/20 transition-all duration-300 disabled:opacity-50"
                >
                  <RefreshCw className={`w-5 h-5 text-white ${refreshing ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Metrics */}
            <div className="lg:col-span-2 space-y-8">
              {/* Top Metrics Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MetricCard
                  title="E-mails Recebidos"
                  value="127"
                  subtitle="Últimas 24 horas"
                  trend="+12% desde ontem"
                  trendType="positive"
                  icon={Mail}
                />
                <MetricCard
                  title="E-mails Resumidos"
                  value="119"
                  subtitle="IA processou 94%"
                  trend="+5% eficiência"
                  trendType="positive"
                  icon={HardDrive}
                />
              </div>

              {/* Second Metrics Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MetricCard
                  title="Urgentes"
                  value="8"
                  subtitle="Requerem atenção imediata"
                  trend="-2 desde ontem"
                  trendType="positive"
                  icon={AlertTriangle}
                />
                <MetricCard
                  title="Clientes Recorrentes"
                  value="23"
                  subtitle="Contatos frequentes"
                  trend="+3 novos esta semana"
                  trendType="positive"
                  icon={Users}
                />
              </div>

              {/* Urgent Emails Section */}
              <UrgentEmails />
            </div>

            {/* Right Column - Client Analytics */}
            <div className="lg:col-span-1">
              <ClientAnalytics />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
