import type { TimeRange } from '../../types';

interface TimeSectionProps {
  weekdayTime: TimeRange;
  holidayTime: TimeRange;
}

function TimeBar({ label, time }: { label: string; time: TimeRange }) {
  const startPercent = (time.start / 24) * 100;
  const widthPercent = ((time.end - time.start) / 24) * 100;

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-xs text-text-secondary">{label}</span>
        <span className="text-xs text-text-muted">
          {time.start}:00 - {time.end}:00
        </span>
      </div>
      <div className="relative">
        <div className="h-3 bg-bg-warm-gray rounded-full overflow-hidden relative">
          <div
            className="absolute h-full bg-accent-gold rounded-full"
            style={{
              left: `${startPercent}%`,
              width: `${widthPercent}%`,
            }}
          />
        </div>
        <div className="flex justify-between mt-0.5 px-0.5">
          <span className="text-[8px] text-text-muted">0</span>
          <span className="text-[8px] text-text-muted">12</span>
          <span className="text-[8px] text-text-muted">24</span>
        </div>
      </div>
    </div>
  );
}

export function TimeSection({ weekdayTime, holidayTime }: TimeSectionProps) {
  return (
    <div className="p-4 h-full flex flex-col">
      <h3 className="text-xs font-medium text-text-muted mb-3 uppercase tracking-wider">活躍時段</h3>
      <div className="space-y-3 flex-1">
        <TimeBar label="平日" time={weekdayTime} />
        <TimeBar label="假日" time={holidayTime} />
      </div>
    </div>
  );
}
