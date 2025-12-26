import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

type User = {
  username: string;
  email: string;
  password: string;
};

const getUsers = (): User[] => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

const saveUsers = (users: User[]) => {
  localStorage.setItem("users", JSON.stringify(users));
};

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const users = getUsers();

    if (isLogin) {
      // LOGIN
      const user = users.find(
          (u) => u.email === email && u.password === password
      );

      if (!user) {
        setError("Email o password errate");
        return;
      }

      localStorage.setItem("session", JSON.stringify(user));
      window.location.href = "/";
    } else {
      // REGISTRAZIONE
      if (password !== confirmPassword) {
        setError("Le password non coincidono");
        return;
      }

      const exists = users.some((u) => u.email === email);
      if (exists) {
        setError("Email già registrata");
        return;
      }

      const newUser: User = { username, email, password };
      users.push(newUser);
      saveUsers(users);

      // auto-login
      localStorage.setItem("session", JSON.stringify(newUser));
      window.location.href = "/";
    }
  };

  return (
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-12">
          <div className="glass-card p-8 max-w-md w-full">
            {/* Tab Switcher */}
            <div className="flex rounded-xl bg-secondary/50 p-1 mb-8">
              <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 rounded-lg font-medium ${
                      isLogin ? "bg-primary text-primary-foreground" : ""
                  }`}
              >
                Login
              </button>
              <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 rounded-lg font-medium ${
                      !isLogin ? "bg-primary text-primary-foreground" : ""
                  }`}
              >
                Registrazione
              </button>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold text-center">
                {isLogin ? "Bentornato!" : "Crea un account"}
              </h2>

              {!isLogin && (
                  <input
                      type="text"
                      placeholder="Nome utente"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background text-foreground placeholder:text-muted-foreground border border-border"
                  />
              )}

              <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background text-foreground placeholder:text-muted-foreground border border-border"
              />

              <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background text-foreground placeholder:text-muted-foreground border border-border"
              />

              {!isLogin && (
                  <input
                      type="password"
                      placeholder="Conferma password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background text-foreground placeholder:text-muted-foreground border border-border"
                  />
              )}

              {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <button type="submit" className="btn-primary w-full">
                {isLogin ? "Accedi" : "Registrati"}
              </button>
            </form>
          </div>
        </main>

        <Footer />
      </div>
  );
};

export default Login;
