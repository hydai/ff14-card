import type { TimeRange } from '../../types';

interface TimeSectionProps {
  weekdayTime: TimeRange;
  holidayTime: TimeRange;
}

function TimeBar({ label, time }: { label: string; time: TimeRange }) {
  const startPercent = (time.start / 24) * 100;
  const widthPercent = ((time.end - time.start) / 24) * 100;

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-text-secondary w-10 flex-shrink-0">{label}</span>
      <div className="flex-1 relative">
        {/* Background bar */}
        <div className="h-4 bg-bg-warm-gray rounded-full overflow-hidden relative">
          {/* Active time range */}
          <div
            className="absolute h-full bg-accent-gold rounded-full"
            style={{
              left: `${startPercent}%`,
              width: `${widthPercent}%`,
            }}
          />
          {/* Hour markers */}
          <div className="absolute inset-0 flex justify-between px-1">
            {[0, 6, 12, 18, 24].map((hour) => (
              <div key={hour} className="w-px h-full bg-border-gold-light opacity-50" />
            ))}
          </div>
        </div>
        {/* Time labels */}
        <div className="flex justify-between mt-0.5">
          <span className="text-[10px] text-text-muted">0</span>
          <span className="text-[10px] text-text-muted">6</span>
          <span className="text-[10px] text-text-muted">12</span>
          <span className="text-[10px] text-text-muted">18</span>
          <span className="text-[10px] text-text-muted">24</span>
        </div>
      </div>
      <span className="text-xs text-text-secondary w-20 text-right flex-shrink-0">
        {time.start}:00 - {time.end}:00
      </span>
    </div>
  );
}

export function TimeSection({ weekdayTime, holidayTime }: TimeSectionProps) {
  return (
    <div className="px-4 py-3 border-t border-border-gold-light">
      <h3 className="text-xs font-medium text-text-muted mb-3 uppercase tracking-wider">活躍時段</h3>
      <div className="space-y-3">
        <TimeBar label="平日" time={weekdayTime} />
        <TimeBar label="假日" time={holidayTime} />
      </div>
    </div>
  );
}
