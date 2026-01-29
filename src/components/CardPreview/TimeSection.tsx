import type { TimeSlots } from '../../types';

interface TimeSectionProps {
  weekdayTime: TimeSlots;
  holidayTime: TimeSlots;
}

function TimeBar({ label, slots }: { label: string; slots: TimeSlots }) {
  const activeCount = slots.hours.filter(Boolean).length;

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-xs text-text-secondary">{label}</span>
        <span className="text-xs text-text-muted">
          {activeCount} 小時
        </span>
      </div>
      <div className="flex gap-0.5">
        {slots.hours.map((active, hour) => (
          <div
            key={hour}
            className={`
              flex-1 h-3 rounded-sm
              ${active ? 'bg-accent-gold' : 'bg-bg-warm-gray'}
            `}
            title={`${hour}:00`}
          />
        ))}
      </div>
      <div className="flex justify-between mt-0.5 px-0.5">
        <span className="text-[8px] text-text-muted">0</span>
        <span className="text-[8px] text-text-muted">12</span>
        <span className="text-[8px] text-text-muted">24</span>
      </div>
    </div>
  );
}

export function TimeSection({ weekdayTime, holidayTime }: TimeSectionProps) {
  return (
    <div className="p-4 h-full flex flex-col">
      <h3 className="text-xs font-medium text-text-muted mb-3 uppercase tracking-wider">活躍時段</h3>
      <div className="space-y-3 flex-1">
        <TimeBar label="平日" slots={weekdayTime} />
        <TimeBar label="假日" slots={holidayTime} />
      </div>
    </div>
  );
}
