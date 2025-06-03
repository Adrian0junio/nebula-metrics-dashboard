
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, RefreshCw } from 'lucide-react';

const EmailVerification = () => {
  const [isResending, setIsResending] = useState(false);

  const handleResend = async () => {
    setIsResending(true);
    // TODO: Implement resend verification email
    setTimeout(() => {
      setIsResending(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <div className="premium-card rounded-xl p-8 w-full max-w-md relative z-10 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mx-auto mb-6 glow-effect">
          <Mail className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-2xl font-bold text-white mb-4">
          Verifique seu email
        </h1>

        <p className="text-gray-400 mb-6">
          Enviamos um link de verificação para seu email. 
          Clique no link para ativar sua conta.
        </p>

        <div className="space-y-4">
          <button
            onClick={handleResend}
            disabled={isResending}
            className="w-full py-3 bg-gradient-to-r from-white/20 to-white/10 rounded-lg hover:from-white/30 hover:to-white/20 transition-all duration-300 border border-white/20 text-white font-medium disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isResending && <RefreshCw className="w-4 h-4 animate-spin" />}
            {isResending ? 'Reenviando...' : 'Reenviar email'}
          </button>

          <Link
            to="/login"
            className="block w-full py-3 bg-transparent border border-white/20 rounded-lg hover:bg-white/5 transition-all duration-300 text-white font-medium"
          >
            Voltar ao login
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Não recebeu o email? Verifique sua pasta de spam.
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;
