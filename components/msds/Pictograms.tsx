import {
  Bomb,
  Cylinder,
  Droplets,
  Fish,
  Flame,
  FlameKindling,
  PersonStanding,
  Skull,
  type LucideIcon,
} from "lucide-react";
import type { GhsPictogram, UnClass } from "@/data/msds/types";

const ghsConfig: Record<
  GhsPictogram,
  {
    code: string;
    label: string;
    icon: LucideIcon | null;
    /** 선 아이콘은 채우지 않고 굵은 선으로 표시 */
    outline?: boolean;
  }
> = {
  explosive: { code: "GHS01", label: "Explosive", icon: Bomb },
  flammable: { code: "GHS02", label: "Flammable", icon: Flame },
  oxidizer: { code: "GHS03", label: "Oxidizer", icon: FlameKindling, outline: true },
  gas: { code: "GHS04", label: "Gas under pressure", icon: Cylinder, outline: true },
  corrosive: { code: "GHS05", label: "Corrosive", icon: Droplets },
  toxic: { code: "GHS06", label: "Acute toxicity", icon: Skull },
  harmful: { code: "GHS07", label: "Irritant", icon: null },
  health: { code: "GHS08", label: "Health hazard", icon: PersonStanding, outline: true },
  environment: { code: "GHS09", label: "Environment", icon: Fish },
};

export function ghsLabel(type: GhsPictogram) {
  return ghsConfig[type].label;
}

/** GHS 그림문자 (빨간 테두리 마름모) */
export function GhsDiamond({
  type,
  size = 56,
  showLabel = false,
}: {
  type: GhsPictogram;
  size?: number;
  showLabel?: boolean;
}) {
  const { code, label, icon: Icon, outline } = ghsConfig[type];
  // 회전된 정사각형이 size 박스 안에 들어가도록 한 변 = size / √2
  const side = Math.round(size / Math.SQRT2);
  const border = Math.max(3, Math.round(size / 14));

  return (
    <figure className="flex flex-col items-center gap-1.5" title={`${code} ${label}`}>
      <div
        className="flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <div
          className="flex items-center justify-center bg-white rotate-45 rounded-[3px]"
          style={{
            width: side,
            height: side,
            border: `${border}px solid #dc2626`,
          }}
        >
          <div className="-rotate-45">
            {Icon ? (
              <Icon
                size={Math.round(size * (outline ? 0.46 : 0.42))}
                fill={outline ? "none" : "black"}
                stroke={outline ? "black" : "white"}
                strokeWidth={outline ? 2.75 : 1.25}
              />
            ) : (
              <span
                className="block font-black leading-none text-black"
                style={{ fontSize: size * 0.45 }}
              >
                !
              </span>
            )}
          </div>
        </div>
      </div>
      {showLabel && (
        <figcaption className="text-[12px] font-medium text-center leading-tight text-sub">
          {label}
        </figcaption>
      )}
    </figure>
  );
}

const unConfig: Record<
  UnClass,
  { top: string; bottom: string; fg: string; icon: LucideIcon | null }
> = {
  "2.1": { top: "#dc2626", bottom: "#dc2626", fg: "#000", icon: Flame },
  "2.2": { top: "#16a34a", bottom: "#16a34a", fg: "#000", icon: Cylinder },
  "2.3": { top: "#fff", bottom: "#fff", fg: "#000", icon: Skull },
  "3": { top: "#dc2626", bottom: "#dc2626", fg: "#000", icon: Flame },
  "4.1": {
    top: "repeating-linear-gradient(90deg,#fff 0 7px,#dc2626 7px 14px)",
    bottom: "repeating-linear-gradient(90deg,#fff 0 7px,#dc2626 7px 14px)",
    fg: "#000",
    icon: Flame,
  },
  "4.2": { top: "#fff", bottom: "#dc2626", fg: "#000", icon: Flame },
  "4.3": { top: "#2563eb", bottom: "#2563eb", fg: "#000", icon: Flame },
  "5.1": { top: "#facc15", bottom: "#facc15", fg: "#000", icon: FlameKindling },
  "5.2": { top: "#dc2626", bottom: "#facc15", fg: "#000", icon: Flame },
  "6.1": { top: "#fff", bottom: "#fff", fg: "#000", icon: Skull },
  "8": { top: "#fff", bottom: "#000", fg: "#fff", icon: Droplets },
  "9": {
    top: "repeating-linear-gradient(90deg,#000 0 6px,#fff 6px 12px)",
    bottom: "#fff",
    fg: "#000",
    icon: null,
  },
};

/** UN 운송 위험물 표지 */
export function UnPlacard({ cls, size = 84 }: { cls: UnClass; size?: number }) {
  const { top, bottom, fg, icon: Icon } = unConfig[cls];
  const side = Math.round(size / Math.SQRT2);

  return (
    <div
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
      title={`UN Class ${cls}`}
    >
      <div
        className="relative overflow-hidden rotate-45 border-[3px] border-black rounded-[3px] shadow-sm"
        style={{ width: side, height: side }}
      >
        {/* 대각선 기준 상/하단 배경 */}
        <div className="absolute inset-0 -rotate-45 scale-150">
          <div className="h-1/2" style={{ background: top }} />
          <div className="h-1/2" style={{ background: bottom }} />
        </div>
        <div className="relative flex flex-col items-center justify-center w-full h-full -rotate-45">
          {Icon && (
            <Icon
              size={Math.round(size * 0.26)}
              fill="black"
              stroke="black"
              strokeWidth={1}
              className="-mt-2"
            />
          )}
          <span
            className="font-black leading-none mt-1"
            style={{ fontSize: size * 0.18, color: fg }}
          >
            {cls}
          </span>
        </div>
      </div>
    </div>
  );
}
