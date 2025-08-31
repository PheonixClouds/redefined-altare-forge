import { Button } from "@/components/ui/button";
import { LiveBadge } from "@/components/ui/live-badge";
import heroImage from "@/assets/hero-purple.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Gaming server hosting with futuristic purple elements"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Studio Badge */}
        <div className="mb-8 animate-float">
          <span className="text-sm text-muted-foreground uppercase tracking-widest">Welcome to</span>
          <h1 className="text-6xl md:text-8xl font-black text-gradient mb-4 animate-pulse-glow">
            Redefined Studios
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where Innovation Meets Gaming Excellence ✨
          </p>
        </div>

        {/* AltareHost Showcase */}
        <div className="mb-12">
          <LiveBadge className="mb-6 text-lg px-6 py-3">
            🎉 AltareHost is LIVE!
          </LiveBadge>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">AltareHost</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            🚀 Premium Minecraft server hosting that actually works! Lightning-fast performance, 
            24/7 support, and the reliability your community deserves. Join 500+ happy server owners! 🎮
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="animate-pulse-glow" onClick={() => window.open('https://discord.gg/altarehost', '_blank')}>
              🎮 Start Your Server Now
            </Button>
            <Button variant="secondary" size="xl" onClick={() => window.open('https://discord.gg/altarehost', '_blank')}>
              📊 View Server Stats
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="bg-card/20 backdrop-blur-sm rounded-lg p-4 border border-border/30">
            <div className="text-2xl font-bold text-gradient">500+</div>
            <div className="text-xs text-muted-foreground uppercase">Servers</div>
          </div>
          <div className="bg-card/20 backdrop-blur-sm rounded-lg p-4 border border-border/30">
            <div className="text-2xl font-bold text-gradient">99.9%</div>
            <div className="text-xs text-muted-foreground uppercase">Uptime</div>
          </div>
          <div className="bg-card/20 backdrop-blur-sm rounded-lg p-4 border border-border/30">
            <div className="text-2xl font-bold text-gradient">24/7</div>
            <div className="text-xs text-muted-foreground uppercase">Support</div>
          </div>
          <div className="bg-card/20 backdrop-blur-sm rounded-lg p-4 border border-border/30">
            <div className="text-2xl font-bold text-gradient">1TB+</div>
            <div className="text-xs text-muted-foreground uppercase">Storage</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 gradient-gaming rounded-lg animate-float opacity-20" />
      <div className="absolute bottom-20 right-10 w-16 h-16 gradient-primary rounded-full animate-float opacity-30" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-secondary rounded-lg animate-float opacity-25" style={{animationDelay: '2s'}} />
    </section>
  );
}