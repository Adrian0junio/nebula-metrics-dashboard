
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: string;
  trendType?: 'positive' | 'negative' | 'neutral';
}

const MetricCard = ({ title, value, subtitle, icon: Icon, trend, trendType = 'neutral' }: MetricCardProps) => {
  const getTrendColor = () => {
    switch (trendType) {
      case 'positive':
        return 'text-white';
      case 'negative':
        return 'text-red-400';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="premium-card rounded-xl p-6 card-hover relative overflow-hidden">
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <h3 className="text-gray-400 text-sm font-medium tracking-wide">{title}</h3>
        <div className="p-2.5 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg border border-white/10">
          <Icon className="w-4 h-4 text-gray-300" />
        </div>
      </div>

      {/* Value */}
      <div className="space-y-2 relative z-10">
        <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
        {subtitle && (
          <p className="text-gray-500 text-sm font-medium">{subtitle}</p>
        )}
        {trend && (
          <p className={`text-sm font-semibold ${getTrendColor()}`}>
            {trend}
          </p>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      
      {/* Corner highlight */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-2xl"></div>
    </div>
  );
};

export default MetricCard;
