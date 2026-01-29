import { AppLayout, Header } from './components/Layout';
import { CardPreview } from './components/CardPreview';
import {
  PhotoEditor,
  CharacterForm,
  MainJobPicker,
  SubJobPicker,
  TimePicker,
  IntroEditor,
} from './components/Editor';
import { useCardState } from './hooks/useCardState';
import { useCardExport } from './hooks/useCardExport';

function App() {
  const {
    cardData,
    updateCharacterName,
    updateRegion,
    updateDataCenter,
    updateServer,
    updateMainJob,
    toggleSubJob,
    toggleWeekdayHour,
    toggleHolidayHour,
    updateIntroduction,
    updatePhotoUrl,
    updateCroppedAreaPixels,
  } = useCardState();

  const { exportCard, isExporting } = useCardExport();

  const handleExport = () => {
    const fileName = cardData.characterName
      ? `${cardData.characterName}-card.png`
      : 'ff14-card.png';
    exportCard('card-preview', fileName);
  };

  return (
    <AppLayout
      header={<Header onExport={handleExport} isExporting={isExporting} />}
      preview={<CardPreview cardData={cardData} />}
      editor={
        <div className="space-y-8">
          <PhotoEditor
            photoUrl={cardData.photoUrl}
            onPhotoChange={updatePhotoUrl}
            onCropComplete={updateCroppedAreaPixels}
          />

          <div className="border-t border-border-gold-light pt-6">
            <CharacterForm
              characterName={cardData.characterName}
              region={cardData.region}
              dataCenter={cardData.dataCenter}
              server={cardData.server}
              onNameChange={updateCharacterName}
              onRegionChange={updateRegion}
              onDataCenterChange={updateDataCenter}
              onServerChange={updateServer}
            />
          </div>

          <div className="border-t border-border-gold-light pt-6">
            <MainJobPicker
              selectedJob={cardData.mainJob}
              onJobSelect={updateMainJob}
            />
          </div>

          <div className="border-t border-border-gold-light pt-6">
            <SubJobPicker
              selectedJobs={cardData.subJobs}
              onToggleJob={toggleSubJob}
            />
          </div>

          <div className="border-t border-border-gold-light pt-6">
            <TimePicker
              weekdayTime={cardData.weekdayTime}
              holidayTime={cardData.holidayTime}
              onWeekdayToggle={toggleWeekdayHour}
              onHolidayToggle={toggleHolidayHour}
            />
          </div>

          <div className="border-t border-border-gold-light pt-6">
            <IntroEditor
              introduction={cardData.introduction}
              onChange={updateIntroduction}
            />
          </div>
        </div>
      }
    />
  );
}

export default App;
