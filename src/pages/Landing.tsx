
import { ArrowRight, Brain, Mail, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const features = [
    {
      icon: Brain,
      title: 'IA Inteligente',
      description: 'Resumos automáticos dos seus emails com pontos-chave e ações sugeridas'
    },
    {
      icon: Zap,
      title: 'Detecção de Urgência',
      description: 'Identifica automaticamente emails urgentes e importantes'
    },
    {
      icon: Mail,
      title: 'Multi-contas',
      description: 'Conecte Gmail, Outlook e outras contas de email'
    },
    {
      icon: Shield,
      title: 'Seguro & Privado',
      description: 'Seus dados são protegidos com criptografia de ponta'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/90">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center shadow-lg glow-effect">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">EmailAI</span>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                to="/login" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="px-6 py-2 bg-gradient-to-r from-white/20 to-white/10 rounded-lg hover:from-white/30 hover:to-white/20 transition-all duration-300 border border-white/20"
              >
                Começar Grátis
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Transforme seus emails em
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              insights inteligentes
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Nossa IA analisa seus emails, identifica urgências e cria resumos inteligentes 
            para que você foque no que realmente importa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup"
              className="px-8 py-4 bg-gradient-to-r from-white/20 to-white/10 rounded-lg hover:from-white/30 hover:to-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2 justify-center text-lg font-medium"
            >
              Começar Grátis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 bg-transparent border border-white/20 rounded-lg hover:bg-white/5 transition-all duration-300 text-lg font-medium">
              Ver Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recursos Principais
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="premium-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para revolucionar sua caixa de entrada?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Junte-se a milhares de profissionais que já economizam horas por semana.
          </p>
          <Link 
            to="/signup"
            className="px-8 py-4 bg-gradient-to-r from-white/20 to-white/10 rounded-lg hover:from-white/30 hover:to-white/20 transition-all duration-300 border border-white/20 inline-flex items-center gap-2 text-lg font-medium"
          >
            Começar Agora
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 EmailAI. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
