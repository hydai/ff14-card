import { serverRegions, getDataCentersByRegion, getServersByDataCenter } from '../../data/servers';

interface CharacterFormProps {
  characterName: string;
  region: string;
  dataCenter: string;
  server: string;
  onNameChange: (name: string) => void;
  onRegionChange: (region: string) => void;
  onDataCenterChange: (dc: string) => void;
  onServerChange: (server: string) => void;
}

export function CharacterForm({
  characterName,
  region,
  dataCenter,
  server,
  onNameChange,
  onRegionChange,
  onDataCenterChange,
  onServerChange,
}: CharacterFormProps) {
  const dataCenters = getDataCentersByRegion(region);
  const servers = getServersByDataCenter(region, dataCenter);

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-text-secondary">角色資訊</h3>

      {/* Character Name */}
      <div>
        <label htmlFor="char-name" className="text-xs text-text-muted block mb-1">
          角色名稱
        </label>
        <input
          type="text"
          id="char-name"
          value={characterName}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="輸入角色名稱"
          className="w-full px-3 py-2 rounded-lg border border-border-gold bg-white focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent text-sm"
        />
      </div>

      {/* Region */}
      <div>
        <label htmlFor="region" className="text-xs text-text-muted block mb-1">
          地區
        </label>
        <select
          id="region"
          value={region}
          onChange={(e) => onRegionChange(e.target.value)}
          className="w-full px-3 py-2 rounded-lg border border-border-gold bg-white focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent text-sm"
        >
          <option value="">選擇地區</option>
          {serverRegions.map((r) => (
            <option key={r.name} value={r.name}>
              {r.name}
            </option>
          ))}
        </select>
      </div>

      {/* Data Center */}
      <div>
        <label htmlFor="dc" className="text-xs text-text-muted block mb-1">
          資料中心
        </label>
        <select
          id="dc"
          value={dataCenter}
          onChange={(e) => onDataCenterChange(e.target.value)}
          disabled={!region}
          className="w-full px-3 py-2 rounded-lg border border-border-gold bg-white focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">選擇資料中心</option>
          {dataCenters.map((dc) => (
            <option key={dc.name} value={dc.name}>
              {dc.name}
            </option>
          ))}
        </select>
      </div>

      {/* Server */}
      <div>
        <label htmlFor="server" className="text-xs text-text-muted block mb-1">
          伺服器
        </label>
        <select
          id="server"
          value={server}
          onChange={(e) => onServerChange(e.target.value)}
          disabled={!dataCenter}
          className="w-full px-3 py-2 rounded-lg border border-border-gold bg-white focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">選擇伺服器</option>
          {servers.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
