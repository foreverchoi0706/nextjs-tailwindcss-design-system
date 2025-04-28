import type { Dispatch, PropsWithChildren } from "react";

export declare namespace Dropdown {
	interface Context {
		onItemClick: (item: string) => void;
		setIsShowList: Dispatch<SetStateAction<boolean>>;
		value: string;
	}

	interface Props extends PropsWithChildren {
		onItemClick: (item: string) => void;
		value: string;
	}

	interface ItemProps extends PropsWithChildren {
		value: string;
	}
}
