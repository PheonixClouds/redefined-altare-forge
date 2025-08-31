import { Button } from "@/components/ui/button";
import { LiveBadge } from "@/components/ui/live-badge";

export function CTA() {
  return (
    <section className="py-24 gradient-hero">
      <div className="container mx-auto px-4 text-center">
        <LiveBadge className="mb-8 text-lg px-6 py-3">
          🚀 Ready to Launch Your Server?
        </LiveBadge>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Start Your Epic <span className="text-gradient">Minecraft Journey</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Join hundreds of server owners who trust AltareHost for their Minecraft hosting needs. 
          Get started in under 5 minutes with our simple setup process! 🎮
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button variant="gaming" size="xl" className="text-xl px-10 py-6" onClick={() => window.open('https://discord.gg/altarehost', '_blank')}>
            🎮 Create Your Server Now
          </Button>
          <Button variant="outline" size="xl" className="border-2" onClick={() => window.open('https://discord.gg/altarehost', '_blank')}>
            💬 Talk to Our Team
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card/20 backdrop-blur-sm rounded-xl p-6 border border-border/30">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-bold mb-2">Instant Setup</h3>
            <p className="text-sm text-muted-foreground">Your server goes live in under 5 minutes</p>
          </div>
          <div className="bg-card/20 backdrop-blur-sm rounded-xl p-6 border border-border/30">
            <div className="text-3xl mb-2">🛡️</div>
            <h3 className="font-bold mb-2">Protected & Secure</h3>
            <p className="text-sm text-muted-foreground">Enterprise-grade security and DDoS protection</p>
          </div>
          <div className="bg-card/20 backdrop-blur-sm rounded-xl p-6 border border-border/30">
            <div className="text-3xl mb-2">💖</div>
            <h3 className="font-bold mb-2">Community Loved</h3>
            <p className="text-sm text-muted-foreground">Join our Discord with 1000+ happy users</p>
          </div>
        </div>
      </div>
    </section>
  );
}