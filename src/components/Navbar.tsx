import { Home, User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl" style={{ background: 'var(--gradient-primary)' }}>
              🎲
            </div>
            <span className="text-xl font-bold gradient-text">DiceRoll</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <Link to="/" className="nav-link flex items-center gap-2">
              <Home size={18} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link to="/profilo" className="nav-link flex items-center gap-2">
              <User size={18} />
              <span className="hidden sm:inline">Profilo</span>
            </Link>
            <Link to="/login" className="nav-link flex items-center gap-2">
              <LogIn size={18} />
              <span className="hidden sm:inline">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
