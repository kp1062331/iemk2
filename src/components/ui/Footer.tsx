import Link from "next/link";
import { Cpu, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight">Qloax</span>
            </Link>
            <p className="text-muted-foreground mb-8 max-w-sm">
              Empowering the future of enterprise technology with advanced AI solutions and premium software infrastructure.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">AI Core</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Infrastructure</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Data Analytics</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Qloax Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm text-muted-foreground">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
