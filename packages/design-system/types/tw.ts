import type { COLORS } from "@/constants/tw";

type TColors = keyof typeof COLORS;

export type TBgColor = `bg-${TColors}`;

export type TTextColor = `text-${TColors}`;
