"use client";

import type { SignalLevel } from "@/data/msds/types";
import { useUiText } from "./LanguageProvider";

export function SignalBadge({
  level,
  text,
}: {
  level: SignalLevel;
  /** 지정하지 않으면 기본 문구(위험/경고) 사용 */
  text?: string;
}) {
  const ui = useUiText();
  if (level === "none") return null;

  const style =
    level === "danger"
      ? "bg-danger/10 text-danger"
      : "bg-amber-400/15 text-amber-600";

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[13px] font-bold shrink-0 ${style}`}
    >
      {text ?? (level === "danger" ? ui.danger : ui.warning)}
    </span>
  );
}
