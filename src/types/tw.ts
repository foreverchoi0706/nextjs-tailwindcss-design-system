import type { Colors } from "@/constants/tw";

type TColors = keyof typeof Colors extends string ? keyof typeof Colors : never;

export type TBgColor = `bg-${TColors}`;

export type TTextColor = `text-${TColors}`;
