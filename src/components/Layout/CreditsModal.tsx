interface CreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreditsModal({ isOpen, onClose }: CreditsModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Modal */}
      <div
        className="relative bg-bg-card rounded-xl shadow-xl max-w-lg w-full p-6 border border-border-gold"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl text-text-primary font-semibold">
            素材來源 / Credits
          </h2>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="關閉"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-sm text-text-secondary">
          <div>
            <h3 className="font-semibold text-text-primary mb-1">像素風職業圖示 / Pixel Art Job Icons</h3>
            <p>FFXIV Fan Kit - Square Enix</p>
            <a
              href="https://na.finalfantasyxiv.com/lodestone/special/fankit/twitter_kit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-gold hover:underline break-all"
            >
              https://na.finalfantasyxiv.com/lodestone/special/fankit/twitter_kit/
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-text-primary mb-1">職業圖示 / Job Icons</h3>
            <p>xivapi/classjob-icons</p>
            <a
              href="https://github.com/xivapi/classjob-icons"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-gold hover:underline break-all"
            >
              https://github.com/xivapi/classjob-icons
            </a>
          </div>

          <hr className="border-border-gold-light" />

          <div className="text-xs text-text-muted">
            <p className="mb-2">
              © SQUARE ENIX CO., LTD. All Rights Reserved.
            </p>
            <p>
              FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
            </p>
          </div>
        </div>

        {/* Close button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-accent-gold text-white rounded-lg font-medium text-sm hover:bg-border-gold transition-colors"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  );
}
