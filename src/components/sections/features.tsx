import { FeatureCard } from "@/components/ui/feature-card";
import { Server, Zap, Shield, HeartHandshake, Gamepad2, Settings } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Gamepad2,
      title: "🎮 Minecraft Optimized",
      description: "Specially tuned servers for Minecraft with mod support, plugin management, and automatic backups. Get your world online in minutes!"
    },
    {
      icon: Zap,
      title: "⚡ Lightning Performance",
      description: "NVMe SSD storage, DDR4 RAM, and premium CPU cores ensure your server runs buttery smooth even with 100+ players online."
    },
    {
      icon: Shield,
      title: "🛡️ DDoS Protection",
      description: "Military-grade DDoS protection keeps your server online 24/7. We handle the attacks, you focus on building epic worlds."
    },
    {
      icon: HeartHandshake,
      title: "💬 Amazing Support",
      description: "Real humans, real help, real fast! Our Discord community and ticket system ensure you're never stuck alone."
    },
    {
      icon: Server,
      title: "🚀 Instant Setup",
      description: "One-click installs for popular modpacks, automatic Java updates, and smart resource scaling. Your server, your way."
    },
    {
      icon: Settings,
      title: "🎯 Full Control",
      description: "Complete FTP access, custom JARs, scheduled restarts, and real-time monitoring. Power users love our flexibility!"
    }
  ];

  return (
    <section className="py-24 bg-card/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">AltareHost</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've built the perfect hosting platform for Minecraft servers. 
            Here's what makes us different from the rest! 🎯
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-float"
              style={{animationDelay: `${index * 0.2}s`}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}