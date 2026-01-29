interface HeaderProps {
  onExport: () => void;
  isExporting: boolean;
}

export function Header({ onExport, isExporting }: HeaderProps) {
  return (
    <header className="bg-bg-card border-b border-border-gold shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-display text-xl sm:text-2xl text-text-primary font-semibold">
            FF14 冒險者名片
          </h1>
          <p className="text-xs text-text-muted mt-0.5">Adventurer Card Generator</p>
        </div>

        <button
          onClick={onExport}
          disabled={isExporting}
          className="flex items-center gap-2 px-4 py-2 bg-accent-gold text-white rounded-lg font-medium text-sm hover:bg-border-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          {isExporting ? (
            <>
              <svg
                className="animate-spin h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>匯出中...</span>
            </>
          ) : (
            <>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>下載圖片</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
