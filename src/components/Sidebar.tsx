
import { Home, CreditCard, DollarSign } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: CreditCard, label: 'Assinaturas', path: '/subscriptions' },
    { icon: DollarSign, label: 'Pagamentos', path: '/payments' }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 sidebar-glow backdrop-blur-lg">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg glow-effect">
          <div className="w-5 h-5 rounded-full bg-white/30 shadow-inner"></div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                isActive
                  ? 'sidebar-item-active text-green-400'
                  : 'text-gray-300 sidebar-item-hover hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
            <span className="font-medium tracking-wide">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
  );
};

export default Sidebar;
