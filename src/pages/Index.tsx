
import { HardDrive, Users, Download, UserCheck } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import MetricCard from '../components/MetricCard';
import TeamSection from '../components/TeamSection';
import SubscriptionSection from '../components/SubscriptionSection';

const Index = () => {
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
            <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard</h1>
          </div>
        </header>

        {/* Content */}
        <main className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Metrics */}
            <div className="lg:col-span-2 space-y-8">
              {/* Top Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MetricCard
                  title="Armazenamento usado"
                  value="1.2 GB"
                  subtitle="10 GB restantes"
                  icon={HardDrive}
                />
                <MetricCard
                  title="Workspaces ativos"
                  value="4"
                  subtitle="6 workspaces disponíveis"
                  icon={Users}
                />
              </div>

              {/* Bottom Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MetricCard
                  title="Itens exportados"
                  value="286"
                  trend="+16% desde o mês passado"
                  trendType="positive"
                  icon={Download}
                />
                <MetricCard
                  title="Colaboradores"
                  value="10"
                  trend="+27% desde o mês passado"
                  trendType="positive"
                  icon={UserCheck}
                />
              </div>

              {/* Subscriptions Section */}
              <SubscriptionSection />
            </div>

            {/* Right Column - Team */}
            <div className="lg:col-span-1">
              <TeamSection />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
