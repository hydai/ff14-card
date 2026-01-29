import type { CardData } from '../../types';
import { PhotoArea } from './PhotoArea';
import { JobSection } from './JobSection';
import { TimeSection } from './TimeSection';
import { IntroSection } from './IntroSection';

interface CardPreviewProps {
  cardData: CardData;
}

export function CardPreview({ cardData }: CardPreviewProps) {
  return (
    <div
      id="card-preview"
      className="w-[600px] h-[800px] bg-bg-card rounded-lg overflow-hidden shadow-xl flex flex-col"
      style={{
        boxShadow: '0 0 0 4px #B8A066, 0 0 0 8px #9C8A6E, 0 12px 48px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Decorative top border */}
      <div className="h-2 bg-gradient-to-r from-border-gold-light via-accent-gold to-border-gold-light" />

      {/* Photo Area - 60% of card */}
      <PhotoArea
        photoUrl={cardData.photoUrl}
        croppedAreaPixels={cardData.croppedAreaPixels}
        mainJob={cardData.mainJob}
        characterName={cardData.characterName}
        dataCenter={cardData.dataCenter}
        server={cardData.server}
      />

      {/* JOB | TIME row */}
      <div className="flex border-t border-border-gold-light">
        <div className="flex-1 border-r border-border-gold-light">
          <JobSection subJobs={cardData.subJobs} />
        </div>
        <div className="flex-1">
          <TimeSection
            weekdayTime={cardData.weekdayTime}
            holidayTime={cardData.holidayTime}
          />
        </div>
      </div>

      {/* Intro section */}
      <IntroSection introduction={cardData.introduction} />

      {/* Decorative bottom border */}
      <div className="h-2 bg-gradient-to-r from-border-gold-light via-accent-gold to-border-gold-light" />
    </div>
  );
}
