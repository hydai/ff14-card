interface IntroSectionProps {
  introduction: string;
}

export function IntroSection({ introduction }: IntroSectionProps) {
  return (
    <div className="px-5 py-4 border-t border-border-gold-light flex-1">
      <h3 className="text-xs font-medium text-text-muted mb-2 uppercase tracking-wider">自我介紹</h3>
      <p className="text-sm text-text-primary leading-relaxed whitespace-pre-wrap">
        {introduction || '在這裡寫下你的自我介紹...'}
      </p>
    </div>
  );
}
