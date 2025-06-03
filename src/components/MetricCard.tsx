
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
        return 'text-green-400';
      case 'negative':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 card-hover relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
        <div className="p-2 bg-gray-800/50 rounded-lg">
          <Icon className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Value */}
      <div className="space-y-1">
        <p className="text-3xl font-bold text-white">{value}</p>
        {subtitle && (
          <p className="text-gray-500 text-sm">{subtitle}</p>
        )}
        {trend && (
          <p className={`text-sm font-medium ${getTrendColor()}`}>
            {trend}
          </p>
        )}
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
    </div>
  );
};

export default MetricCard;
