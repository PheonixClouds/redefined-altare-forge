import { StatsCard } from "@/components/ui/stats-card";

export function Stats() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">AltareHost</span> by the Numbers 📊
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stats from our amazing community of server owners and players! 
            These numbers keep growing every day 🚀
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <StatsCard 
            value="500+" 
            label="Active Servers"
            style={{animationDelay: '0s'}}
          />
          <StatsCard 
            value="50,000+" 
            label="Happy Players"
            style={{animationDelay: '0.2s'}}
          />
          <StatsCard 
            value="99.9%" 
            label="Uptime Record"
            style={{animationDelay: '0.4s'}}
          />
          <StatsCard 
            value="24/7" 
            label="Expert Support"
            style={{animationDelay: '0.6s'}}
          />
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Join Our Growing Community! 🎉</h3>
            <p className="text-muted-foreground mb-6">
              From small friend groups to massive public servers, AltareHost powers 
              Minecraft communities of all sizes. Your next adventure starts here!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="bg-primary/20 px-3 py-1 rounded-full">✅ Modded Servers</span>
              <span className="bg-secondary/20 px-3 py-1 rounded-full">✅ Vanilla Worlds</span>
              <span className="bg-accent/20 px-3 py-1 rounded-full">✅ PvP Arenas</span>
              <span className="bg-primary/20 px-3 py-1 rounded-full">✅ Creative Builds</span>
              <span className="bg-secondary/20 px-3 py-1 rounded-full">✅ Mini-Games</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}