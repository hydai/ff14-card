import type { Job } from '../types';

export const jobs: Job[] = [
  // Tanks
  { id: 'pld', name: 'Paladin', nameZh: '騎士', role: 'tank', abbr: 'PLD' },
  { id: 'war', name: 'Warrior', nameZh: '戰士', role: 'tank', abbr: 'WAR' },
  { id: 'drk', name: 'Dark Knight', nameZh: '暗黑騎士', role: 'tank', abbr: 'DRK' },
  { id: 'gnb', name: 'Gunbreaker', nameZh: '絕槍戰士', role: 'tank', abbr: 'GNB' },

  // Healers
  { id: 'whm', name: 'White Mage', nameZh: '白魔法師', role: 'healer', abbr: 'WHM' },
  { id: 'sch', name: 'Scholar', nameZh: '學者', role: 'healer', abbr: 'SCH' },
  { id: 'ast', name: 'Astrologian', nameZh: '占星術士', role: 'healer', abbr: 'AST' },
  { id: 'sge', name: 'Sage', nameZh: '賢者', role: 'healer', abbr: 'SGE' },

  // Melee DPS
  { id: 'mnk', name: 'Monk', nameZh: '武僧', role: 'melee', abbr: 'MNK' },
  { id: 'drg', name: 'Dragoon', nameZh: '龍騎士', role: 'melee', abbr: 'DRG' },
  { id: 'nin', name: 'Ninja', nameZh: '忍者', role: 'melee', abbr: 'NIN' },
  { id: 'sam', name: 'Samurai', nameZh: '侍', role: 'melee', abbr: 'SAM' },
  { id: 'rpr', name: 'Reaper', nameZh: '鐮刀師', role: 'melee', abbr: 'RPR' },
  { id: 'vpr', name: 'Viper', nameZh: '蝮蛇劍士', role: 'melee', abbr: 'VPR' },

  // Ranged Physical DPS
  { id: 'brd', name: 'Bard', nameZh: '吟遊詩人', role: 'ranged', abbr: 'BRD' },
  { id: 'mch', name: 'Machinist', nameZh: '機工士', role: 'ranged', abbr: 'MCH' },
  { id: 'dnc', name: 'Dancer', nameZh: '舞者', role: 'ranged', abbr: 'DNC' },

  // Ranged Magical DPS
  { id: 'blm', name: 'Black Mage', nameZh: '黑魔法師', role: 'magic', abbr: 'BLM' },
  { id: 'smn', name: 'Summoner', nameZh: '召喚師', role: 'magic', abbr: 'SMN' },
  { id: 'rdm', name: 'Red Mage', nameZh: '赤魔法師', role: 'magic', abbr: 'RDM' },
  { id: 'pct', name: 'Pictomancer', nameZh: '繪靈法師', role: 'magic', abbr: 'PCT' },
];

export const jobsByRole = {
  tank: jobs.filter(j => j.role === 'tank'),
  healer: jobs.filter(j => j.role === 'healer'),
  melee: jobs.filter(j => j.role === 'melee'),
  ranged: jobs.filter(j => j.role === 'ranged'),
  magic: jobs.filter(j => j.role === 'magic'),
};

export const roleColors: Record<string, string> = {
  tank: '#3B5998',
  healer: '#4A9C5D',
  melee: '#C04040',
  ranged: '#C08040',
  magic: '#9040C0',
};

export const roleNames: Record<string, string> = {
  tank: '坦克',
  healer: '治療',
  melee: '近戰',
  ranged: '遠敏',
  magic: '法系',
};

const base = import.meta.env.BASE_URL;

export const jobIcons: Record<string, string> = {
  pld: `${base}icons/jobs/pld.png`,
  war: `${base}icons/jobs/war.png`,
  drk: `${base}icons/jobs/drk.png`,
  gnb: `${base}icons/jobs/gnb.png`,
  whm: `${base}icons/jobs/whm.png`,
  sch: `${base}icons/jobs/sch.png`,
  ast: `${base}icons/jobs/ast.png`,
  sge: `${base}icons/jobs/sge.png`,
  mnk: `${base}icons/jobs/mnk.png`,
  drg: `${base}icons/jobs/drg.png`,
  nin: `${base}icons/jobs/nin.png`,
  sam: `${base}icons/jobs/sam.png`,
  rpr: `${base}icons/jobs/rpr.png`,
  vpr: `${base}icons/jobs/vpr.png`,
  brd: `${base}icons/jobs/brd.png`,
  mch: `${base}icons/jobs/mch.png`,
  dnc: `${base}icons/jobs/dnc.png`,
  blm: `${base}icons/jobs/blm.png`,
  smn: `${base}icons/jobs/smn.png`,
  rdm: `${base}icons/jobs/rdm.png`,
  pct: `${base}icons/jobs/pct.png`,
};

export const jobPixelIcons: Record<string, string> = {
  pld: `${base}icons/jobs-pixel/pld.png`,
  war: `${base}icons/jobs-pixel/war.png`,
  drk: `${base}icons/jobs-pixel/drk.png`,
  gnb: `${base}icons/jobs-pixel/gnb.png`,
  whm: `${base}icons/jobs-pixel/whm.png`,
  sch: `${base}icons/jobs-pixel/sch.png`,
  ast: `${base}icons/jobs-pixel/ast.png`,
  sge: `${base}icons/jobs-pixel/sge.png`,
  mnk: `${base}icons/jobs-pixel/mnk.png`,
  drg: `${base}icons/jobs-pixel/drg.png`,
  nin: `${base}icons/jobs-pixel/nin.png`,
  sam: `${base}icons/jobs-pixel/sam.png`,
  rpr: `${base}icons/jobs-pixel/rpr.png`,
  vpr: `${base}icons/jobs-pixel/vpr.png`,
  brd: `${base}icons/jobs-pixel/brd.png`,
  mch: `${base}icons/jobs-pixel/mch.png`,
  dnc: `${base}icons/jobs-pixel/dnc.png`,
  blm: `${base}icons/jobs-pixel/blm.png`,
  smn: `${base}icons/jobs-pixel/smn.png`,
  rdm: `${base}icons/jobs-pixel/rdm.png`,
  pct: `${base}icons/jobs-pixel/pct.png`,
};
