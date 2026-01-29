export type JobRole = 'tank' | 'healer' | 'melee' | 'ranged' | 'magic';

export interface Job {
  id: string;
  name: string;
  nameZh: string;
  role: JobRole;
  abbr: string;
}

export interface DataCenter {
  name: string;
  region: string;
  servers: string[];
}

export interface ServerRegion {
  name: string;
  dataCenters: DataCenter[];
}

export interface TimeRange {
  start: number;
  end: number;
}

export interface CroppedArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CardData {
  characterName: string;
  region: string;
  dataCenter: string;
  server: string;
  mainJob: Job | null;
  subJobs: Job[];
  weekdayTime: TimeRange;
  holidayTime: TimeRange;
  introduction: string;
  photoUrl: string | null;
  croppedAreaPixels: CroppedArea | null;
}

export const initialCardData: CardData = {
  characterName: '',
  region: '',
  dataCenter: '',
  server: '',
  mainJob: null,
  subJobs: [],
  weekdayTime: { start: 20, end: 24 },
  holidayTime: { start: 10, end: 24 },
  introduction: '',
  photoUrl: null,
  croppedAreaPixels: null,
};
