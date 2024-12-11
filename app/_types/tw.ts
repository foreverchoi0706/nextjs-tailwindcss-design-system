import type { Colors } from "@/app/_constants/tw";

type TColors = keyof typeof Colors;

export type TBgColor = `bg-${TColors}`;

export type TTextColor = `text-${TColors}`;
