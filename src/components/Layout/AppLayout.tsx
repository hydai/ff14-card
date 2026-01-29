import type { ReactNode } from 'react';

interface AppLayoutProps {
  header: ReactNode;
  preview: ReactNode;
  editor: ReactNode;
}

export function AppLayout({ header, preview, editor }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {header}

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 sm:px-6 py-6">
        <div className="flex flex-col gap-6">
          {/* Preview Section */}
          <div className="flex justify-center">
            {preview}
          </div>

          {/* Editor Section */}
          <div className="bg-bg-card rounded-xl p-6 shadow-lg border border-border-gold-light">
            {editor}
          </div>
        </div>
      </main>

      <footer className="bg-bg-card border-t border-border-gold-light py-4 text-center">
        <p className="text-xs text-text-muted">
          Final Fantasy XIV (c) SQUARE ENIX CO., LTD. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
