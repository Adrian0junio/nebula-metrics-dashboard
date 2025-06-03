
import { Home, CreditCard, DollarSign, Mail, BarChart3, Settings, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Mail, label: 'E-mails', path: '/emails' },
    { icon: BarChart3, label: 'Relatórios', path: '/reports' },
    { icon: Users, label: 'Clientes', path: '/clients' },
    { icon: CreditCard, label: 'Assinaturas', path: '/subscriptions' },
    { icon: DollarSign, label: 'Pagamentos', path: '/payments' },
    { icon: Settings, label: 'Configurações', path: '/settings' }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 sidebar-glow backdrop-blur-lg">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center shadow-lg glow-effect">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">EmailAI</h2>
            <p className="text-xs text-gray-400">Inteligência Artificial</p>
          </div>
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
                  ? 'sidebar-item-active text-white'
                  : 'text-gray-300 sidebar-item-hover hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
            <span className="font-medium tracking-wide">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* User Profile */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="premium-card rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-white">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white">João Dias</p>
              <p className="text-xs text-gray-400 truncate">joao@empresa.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
  );
};

export default Sidebar;
