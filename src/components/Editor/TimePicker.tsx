import type { TimeRange } from '../../types';

interface TimePickerProps {
  weekdayTime: TimeRange;
  holidayTime: TimeRange;
  onWeekdayChange: (time: TimeRange) => void;
  onHolidayChange: (time: TimeRange) => void;
}

function TimeRangeInput({
  label,
  time,
  onChange,
}: {
  label: string;
  time: TimeRange;
  onChange: (time: TimeRange) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-text-muted">{label}</span>
        <span className="text-xs text-text-secondary">
          {time.start}:00 - {time.end}:00
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <label className="text-[10px] text-text-muted block mb-1">開始</label>
          <input
            type="range"
            min={0}
            max={23}
            value={time.start}
            onChange={(e) => {
              const start = Number(e.target.value);
              onChange({ start, end: Math.max(start + 1, time.end) });
            }}
            className="w-full"
          />
        </div>
        <div className="flex-1">
          <label className="text-[10px] text-text-muted block mb-1">結束</label>
          <input
            type="range"
            min={1}
            max={24}
            value={time.end}
            onChange={(e) => {
              const end = Number(e.target.value);
              onChange({ start: Math.min(time.start, end - 1), end });
            }}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export function TimePicker({
  weekdayTime,
  holidayTime,
  onWeekdayChange,
  onHolidayChange,
}: TimePickerProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-text-secondary">活躍時段</h3>

      <div className="space-y-4">
        <TimeRangeInput
          label="平日"
          time={weekdayTime}
          onChange={onWeekdayChange}
        />
        <TimeRangeInput
          label="假日"
          time={holidayTime}
          onChange={onHolidayChange}
        />
      </div>
    </div>
  );
}
