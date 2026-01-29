import type { ServerRegion } from '../types';

export const serverRegions: ServerRegion[] = [
  // Global - North America
  {
    name: 'North America',
    dataCenters: [
      {
        name: 'Aether',
        region: 'NA',
        servers: ['Adamantoise', 'Cactuar', 'Faerie', 'Gilgamesh', 'Jenova', 'Midgardsormr', 'Sargatanas', 'Siren'],
      },
      {
        name: 'Crystal',
        region: 'NA',
        servers: ['Balmung', 'Brynhildr', 'Coeurl', 'Diabolos', 'Goblin', 'Malboro', 'Mateus', 'Zalera'],
      },
      {
        name: 'Primal',
        region: 'NA',
        servers: ['Behemoth', 'Excalibur', 'Exodus', 'Famfrit', 'Hyperion', 'Lamia', 'Leviathan', 'Ultros'],
      },
      {
        name: 'Dynamis',
        region: 'NA',
        servers: ['Halicarnassus', 'Maduin', 'Marilith', 'Seraph', 'Cuchulainn', 'Golem', 'Kraken', 'Rafflesia'],
      },
    ],
  },
  // Global - Europe
  {
    name: 'Europe',
    dataCenters: [
      {
        name: 'Chaos',
        region: 'EU',
        servers: ['Cerberus', 'Louisoix', 'Moogle', 'Omega', 'Phantom', 'Ragnarok', 'Sagittarius', 'Spriggan'],
      },
      {
        name: 'Light',
        region: 'EU',
        servers: ['Alpha', 'Lich', 'Odin', 'Phoenix', 'Raiden', 'Shiva', 'Twintania', 'Zodiark'],
      },
    ],
  },
  // Global - Japan
  {
    name: 'Japan',
    dataCenters: [
      {
        name: 'Elemental',
        region: 'JP',
        servers: ['Aegis', 'Atomos', 'Carbuncle', 'Garuda', 'Gungnir', 'Kujata', 'Tonberry', 'Typhon'],
      },
      {
        name: 'Gaia',
        region: 'JP',
        servers: ['Alexander', 'Bahamut', 'Durandal', 'Fenrir', 'Ifrit', 'Ridill', 'Tiamat', 'Ultima'],
      },
      {
        name: 'Mana',
        region: 'JP',
        servers: ['Anima', 'Asura', 'Chocobo', 'Hades', 'Ixion', 'Masamune', 'Pandaemonium', 'Titan'],
      },
      {
        name: 'Meteor',
        region: 'JP',
        servers: ['Belias', 'Mandragora', 'Ramuh', 'Shinryu', 'Unicorn', 'Valefor', 'Yojimbo', 'Zeromus'],
      },
    ],
  },
  // Global - Oceania
  {
    name: 'Oceania',
    dataCenters: [
      {
        name: 'Materia',
        region: 'OCE',
        servers: ['Bismarck', 'Ravana', 'Sephirot', 'Sophia', 'Zurvan'],
      },
    ],
  },
  // China
  {
    name: '国服',
    dataCenters: [
      {
        name: '陆行鸟',
        region: 'CN',
        servers: ['萌芽池', '神意之地', '红玉海', '拉诺西亚', '幻影群岛', '宇宙和音', '沃仙曦染', '晨曦王座'],
      },
      {
        name: '莫古力',
        region: 'CN',
        servers: ['潮风亭', '白银乡', '神拳痕', '白金幻象', '旅人栈桥', '拂晓之间', '龙巢神殿', '梦羽宝境'],
      },
      {
        name: '猫小胖',
        region: 'CN',
        servers: ['紫水栈桥', '摩杜纳', '延夏', '静语庄园', '海猫茶屋', '柔风海湾', '琥珀原'],
      },
      {
        name: '豆豆柴',
        region: 'CN',
        servers: ['水晶塔', '银泪湖', '太阳海岸', '伊修加德', '红茶川'],
      },
    ],
  },
  // Taiwan
  {
    name: '繁中服',
    dataCenters: [
      {
        name: 'Gaia TW',
        region: 'TW',
        servers: ['伊弗利特', '迦樓羅', '利維坦', '鳳凰', '奧汀', '巴哈姆特'],
      },
    ],
  },
];

export const getDataCentersByRegion = (regionName: string) => {
  const region = serverRegions.find(r => r.name === regionName);
  return region ? region.dataCenters : [];
};

export const getServersByDataCenter = (regionName: string, dcName: string) => {
  const region = serverRegions.find(r => r.name === regionName);
  if (!region) return [];
  const dc = region.dataCenters.find(d => d.name === dcName);
  return dc ? dc.servers : [];
};
