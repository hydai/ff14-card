import { useState, type ReactNode } from 'react';
import { CreditsModal } from './CreditsModal';

interface AppLayoutProps {
  header: ReactNode;
  preview: ReactNode;
  editor: ReactNode;
}

export function AppLayout({ header, preview, editor }: AppLayoutProps) {
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {header}

      <main className="flex-1 w-full px-4 sm:px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
          {/* Preview Section - Left on desktop */}
          <div className="flex justify-center lg:sticky lg:top-6 lg:self-start">
            {preview}
          </div>

          {/* Editor Section - Right on desktop */}
          <div className="flex-1 bg-bg-card rounded-xl p-6 shadow-lg border border-border-gold-light">
            {editor}
          </div>
        </div>
      </main>

      <footer className="bg-bg-card border-t border-border-gold-light py-4 text-center">
        <p className="text-xs text-text-muted">
          Final Fantasy XIV © SQUARE ENIX CO., LTD. All Rights Reserved.
          <span className="mx-2">|</span>
          <button
            onClick={() => setIsCreditsOpen(true)}
            className="text-accent-gold hover:underline"
          >
            素材來源 / Credits
          </button>
        </p>
      </footer>

      <CreditsModal isOpen={isCreditsOpen} onClose={() => setIsCreditsOpen(false)} />
    </div>
  );
}
