interface IntroEditorProps {
  introduction: string;
  onChange: (intro: string) => void;
}

export function IntroEditor({ introduction, onChange }: IntroEditorProps) {
  const maxLength = 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-text-secondary">自我介紹</h3>
        <span className="text-xs text-text-muted">
          {introduction.length}/{maxLength}
        </span>
      </div>

      <textarea
        value={introduction}
        onChange={(e) => onChange(e.target.value.slice(0, maxLength))}
        placeholder="寫下你的自我介紹，讓其他冒險者認識你..."
        rows={3}
        className="w-full px-3 py-2 rounded-lg border border-border-gold bg-white focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent text-sm resize-none"
      />
    </div>
  );
}
