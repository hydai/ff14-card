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

export interface TimeSlots {
  hours: boolean[]; // 24 booleans, index = hour (0-23)
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
  weekdayTime: TimeSlots;
  holidayTime: TimeSlots;
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
  weekdayTime: { hours: Array(24).fill(false).map((_, i) => i >= 20) },
  holidayTime: { hours: Array(24).fill(false).map((_, i) => i >= 10) },
  introduction: '',
  photoUrl: null,
  croppedAreaPixels: null,
};
