import type { Colors } from "../constants/tw";

type TColors = keyof typeof Colors;

export type TBgColor = `bg-${TColors}`;

export type TTextColor = `text-${TColors}`;
