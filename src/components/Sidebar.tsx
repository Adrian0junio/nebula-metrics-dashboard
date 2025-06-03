
import { Home, CreditCard, DollarSign } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: CreditCard, label: 'Assinaturas', path: '/subscriptions' },
    { icon: DollarSign, label: 'Pagamentos', path: '/payments' }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-900/80 backdrop-blur-sm border-r border-gray-800/50">
      {/* Header */}
      <div className="p-6 border-b border-gray-800/50">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-white/20"></div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                isActive
                  ? 'bg-green-500/20 text-green-400 border-glow'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
