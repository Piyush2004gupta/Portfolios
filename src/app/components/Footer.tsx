import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-white">
          Built with <Heart className="w-4 h-4 fill-primary text-primary" /> by Piyush Gupta
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}