import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-card/30 border-t border-border/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Studio Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Redefined Studios</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Creating amazing digital experiences that bring communities together. 
              AltareHost is just the beginning of our journey to redefine gaming hosting! 🚀
            </p>
            <div className="flex gap-4">
              <Button variant="secondary" size="sm">Discord</Button>
              <Button variant="outline" size="sm">Twitter</Button>
              <Button variant="outline" size="sm">GitHub</Button>
            </div>
          </div>

          {/* AltareHost */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">AltareHost</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Server Plans</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Modpack Library</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Control Panel</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Server Status</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-secondary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Discord Support</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Billing Help</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Server Migration</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 Redefined Studios. Built with ❤️ for the Minecraft community.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}