import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dice from "@/components/Dice";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-12">
        <div className="text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Lancia il <span className="gradient-text">Dado</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Premi il pulsante e lascia che la fortuna decida per te!
            </p>
          </div>

          {/* Dice Component */}
          <Dice />

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-primary/30 animate-pulse hidden lg:block" />
          <div className="absolute top-1/3 right-20 w-3 h-3 rounded-full bg-accent/30 animate-pulse hidden lg:block" />
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/20 animate-pulse hidden lg:block" />
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-accent/20 animate-pulse hidden lg:block" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
