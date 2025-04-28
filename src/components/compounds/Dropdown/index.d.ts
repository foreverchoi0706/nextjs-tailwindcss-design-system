import { Dispatch, PropsWithChildren } from "react";

export interface DropdownContext {
  onItemClick: (item: string) => void;
  setIsShowList: Dispatch<SetStateAction<boolean>>;
  value: string;
}

export interface DropdownProps extends PropsWithChildren {
  onItemClick: (item: string) => void;
  value: string;
}

export interface DropdownItemProps extends PropsWithChildren {
  value: string;
}
