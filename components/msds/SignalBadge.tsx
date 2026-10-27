"use client";

import { AlertTriangle } from "lucide-react";
import type { SignalLevel } from "@/data/msds/types";
import { useUiText } from "./LanguageProvider";

export function SignalBadge({
  level,
  text,
  large = false,
}: {
  level: SignalLevel;
  /** 지정하지 않으면 기본 문구(위험/경고) 사용 */
  text?: string;
  large?: boolean;
}) {
  const ui = useUiText();
  if (level === "none") return null;

  const style =
    level === "danger"
      ? "bg-red-600 text-white"
      : "bg-amber-400 text-amber-950";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md font-black tracking-wide shrink-0 ${style} ${
        large ? "px-3 py-1.5 text-sm" : "px-2 py-1 text-[11px]"
      }`}
    >
      <AlertTriangle size={large ? 16 : 13} strokeWidth={2.5} />
      {text ?? (level === "danger" ? ui.danger : ui.warning)}
    </span>
  );
}
