import type { Job } from '../../types';
import { roleColors, jobIcons } from '../../data/jobs';

interface JobSectionProps {
  subJobs: Job[];
}

export function JobSection({ subJobs }: JobSectionProps) {
  return (
    <div className="p-4 h-full flex flex-col">
      <h3 className="text-xs font-medium text-text-muted mb-3 uppercase tracking-wider">副職業</h3>
      <div className="grid grid-cols-4 gap-2 flex-1 content-start">
        {subJobs.map((job) => (
          <div
            key={job.id}
            className="h-8 rounded-lg flex items-center justify-center shadow-sm border border-border-gold-light"
            style={{ backgroundColor: roleColors[job.role] }}
          >
            <img
              src={jobIcons[job.id]}
              alt={job.abbr}
              className="w-6 h-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
