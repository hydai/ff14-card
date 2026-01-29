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
      className="w-[300px] h-[400px] bg-bg-card rounded-lg overflow-hidden shadow-xl flex flex-col"
      style={{
        boxShadow: '0 0 0 3px #B8A066, 0 0 0 5px #9C8A6E, 0 8px 32px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-border-gold-light via-accent-gold to-border-gold-light" />

      <PhotoArea
        photoUrl={cardData.photoUrl}
        croppedAreaPixels={cardData.croppedAreaPixels}
        mainJob={cardData.mainJob}
        characterName={cardData.characterName}
        dataCenter={cardData.dataCenter}
        server={cardData.server}
      />

      <JobSection subJobs={cardData.subJobs} />

      <TimeSection
        weekdayTime={cardData.weekdayTime}
        holidayTime={cardData.holidayTime}
      />

      <IntroSection introduction={cardData.introduction} />

      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-border-gold-light via-accent-gold to-border-gold-light" />
    </div>
  );
}
