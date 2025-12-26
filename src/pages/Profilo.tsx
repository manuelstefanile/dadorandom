import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User } from "lucide-react";

const Profilo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-12">
        <div className="glass-card p-12 text-center max-w-md w-full">
          <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
            <User size={48} className="text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Il Tuo Profilo</h1>
          <p className="text-muted-foreground mb-6">
            Effettua il login per vedere le tue statistiche di gioco
          </p>
          <div className="space-y-4 text-left">
            <div className="flex justify-between p-4 rounded-xl bg-secondary/50">
              <span className="text-muted-foreground">Lanci totali</span>
              <span className="font-bold">--</span>
            </div>
            <div className="flex justify-between p-4 rounded-xl bg-secondary/50">
              <span className="text-muted-foreground">Numero più uscito</span>
              <span className="font-bold">--</span>
            </div>
            <div className="flex justify-between p-4 rounded-xl bg-secondary/50">
              <span className="text-muted-foreground">Ultimo lancio</span>
              <span className="font-bold">--</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profilo;
