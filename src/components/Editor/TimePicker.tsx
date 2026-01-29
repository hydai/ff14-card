import type { TimeSlots } from '../../types';

interface TimePickerProps {
  weekdayTime: TimeSlots;
  holidayTime: TimeSlots;
  onWeekdayToggle: (hour: number) => void;
  onHolidayToggle: (hour: number) => void;
}

function HourGrid({
  label,
  slots,
  onToggle,
}: {
  label: string;
  slots: TimeSlots;
  onToggle: (hour: number) => void;
}) {
  const activeCount = slots.hours.filter(Boolean).length;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-text-muted">{label}</span>
        <span className="text-xs text-text-secondary">
          {activeCount} 小時
        </span>
      </div>
      <div className="grid grid-cols-8 gap-1">
        {slots.hours.map((active, hour) => (
          <button
            key={hour}
            type="button"
            onClick={() => onToggle(hour)}
            className={`
              w-full aspect-square text-xs font-medium rounded
              transition-colors duration-150
              ${active
                ? 'bg-accent-gold text-bg-card'
                : 'bg-bg-warm-gray text-text-muted hover:bg-bg-warm-gray/80'
              }
            `}
          >
            {hour}
          </button>
        ))}
      </div>
    </div>
  );
}

export function TimePicker({
  weekdayTime,
  holidayTime,
  onWeekdayToggle,
  onHolidayToggle,
}: TimePickerProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-text-secondary">活躍時段</h3>

      <div className="space-y-4">
        <HourGrid
          label="平日"
          slots={weekdayTime}
          onToggle={onWeekdayToggle}
        />
        <HourGrid
          label="假日"
          slots={holidayTime}
          onToggle={onHolidayToggle}
        />
      </div>
    </div>
  );
}
