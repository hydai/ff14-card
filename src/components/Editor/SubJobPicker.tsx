import type { Job } from '../../types';
import { jobsByRole, roleColors, roleNames, jobIcons } from '../../data/jobs';

interface SubJobPickerProps {
  selectedJobs: Job[];
  onToggleJob: (job: Job) => void;
}

export function SubJobPicker({ selectedJobs, onToggleJob }: SubJobPickerProps) {
  const roles = ['tank', 'healer', 'melee', 'ranged', 'magic'] as const;
  const selectedIds = new Set(selectedJobs.map((j) => j.id));
  const isFull = selectedJobs.length >= 12;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-text-secondary">副職業</h3>
        <span className="text-xs text-text-muted">{selectedJobs.length}/12</span>
      </div>

      <div className="space-y-3">
        {roles.map((role) => (
          <div key={role}>
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: roleColors[role] }}
              />
              <span className="text-xs text-text-muted">{roleNames[role]}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {jobsByRole[role].map((job) => {
                const isSelected = selectedIds.has(job.id);
                const isDisabled = !isSelected && isFull;

                return (
                  <button
                    key={job.id}
                    onClick={() => !isDisabled && onToggleJob(job)}
                    disabled={isDisabled}
                    className={`p-1.5 rounded-lg transition-all ${
                      isSelected
                        ? 'shadow-md'
                        : isDisabled
                        ? 'bg-bg-warm-gray/50 opacity-50 cursor-not-allowed'
                        : 'bg-bg-warm-gray hover:bg-bg-cream'
                    }`}
                    style={
                      isSelected
                        ? { backgroundColor: roleColors[role] }
                        : undefined
                    }
                  >
                    <img
                      src={jobIcons[job.id]}
                      alt={job.abbr}
                      className="w-6 h-6"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
