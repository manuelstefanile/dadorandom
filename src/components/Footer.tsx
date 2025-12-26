const Footer = () => {
  return (
    <footer className="glass-card border-t border-border/30 mt-auto">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎲</span>
            <span className="font-semibold gradient-text">DiceRoll</span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center">
            © 2024 DiceRoll. Tenta la fortuna!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
