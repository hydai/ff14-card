import type { Job } from '../../types';
import { jobsByRole, roleColors, roleNames, jobIcons } from '../../data/jobs';

interface MainJobPickerProps {
  selectedJob: Job | null;
  onJobSelect: (job: Job | null) => void;
}

export function MainJobPicker({ selectedJob, onJobSelect }: MainJobPickerProps) {
  const roles = ['tank', 'healer', 'melee', 'ranged', 'magic'] as const;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-text-secondary">主職業</h3>

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
              {jobsByRole[role].map((job) => (
                <button
                  key={job.id}
                  onClick={() =>
                    onJobSelect(selectedJob?.id === job.id ? null : job)
                  }
                  className={`p-1.5 rounded-lg transition-all ${
                    selectedJob?.id === job.id
                      ? 'shadow-md scale-105'
                      : 'bg-bg-warm-gray hover:bg-bg-cream'
                  }`}
                  style={
                    selectedJob?.id === job.id
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
