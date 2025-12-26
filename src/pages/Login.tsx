import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-12">
        <div className="glass-card p-8 max-w-md w-full">
          {/* Tab Switcher */}
          <div className="flex rounded-xl bg-secondary/50 p-1 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 rounded-lg font-medium transition-all duration-300 ${
                isLogin ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 rounded-lg font-medium transition-all duration-300 ${
                !isLogin ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Registrazione
            </button>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-2xl font-bold text-center mb-6">
              {isLogin ? 'Bentornato!' : 'Crea un account'}
            </h2>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  Nome utente
                </label>
                <input
                  type="text"
                  placeholder="Il tuo nome"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2 text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-muted-foreground">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  Conferma Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            )}

            <button type="submit" className="btn-primary w-full text-lg">
              {isLogin ? 'Accedi' : 'Registrati'}
            </button>

            {isLogin && (
              <p className="text-center text-sm text-muted-foreground">
                Password dimenticata?{' '}
                <a href="#" className="text-primary hover:underline">
                  Recuperala
                </a>
              </p>
            )}
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
