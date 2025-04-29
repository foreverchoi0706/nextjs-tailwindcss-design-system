import Typography from "@/stories/atoms/Typography";
import type { Dropdown } from "./index.d";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const Context = createContext({} as Dropdown.Context);

const Default = ({ children, onItemClick, value }: Dropdown.Props) => {
	const refDropdown = useRef<HTMLDivElement>(null);
	const [isShowList, setIsShowList] = useState<boolean>(false);

	useEffect(() => {
		const abortController = new AbortController();

		window.document.addEventListener(
			"click",
			({ target }) => {
				if (refDropdown.current === null) return;
				setIsShowList(refDropdown.current.contains(target as Node));
			},
			{
				signal: abortController.signal,
			},
		);

		return () => {
			abortController.abort();
		};
	}, []);

	return (
		<Context.Provider value={{ onItemClick, setIsShowList, value }}>
			<div ref={refDropdown} className="relative inline-block cursor-pointer border">
				<Typography className="p-4 " onClick={() => setIsShowList((prev) => !prev)}>
					{value}
				</Typography>
				<ul
					className={`${
						isShowList ? "block" : "hidden"
					} absolute top-[100%] left-0 z-10 mt-2 border`}
				>
					{children}
				</ul>
			</div>
		</Context.Provider>
	);
};

const Item = ({ children, value }: Dropdown.ItemProps) => {
	const { onItemClick, setIsShowList } = useContext(Context);

	return (
		<li
			className="cursor-pointer p-4"
			onClick={() => {
				onItemClick(value);
				setIsShowList(false);
			}}
		>
			{children}
		</li>
	);
};

const Component = Default as typeof Default & { Item: typeof Item };
Component.Item = Item;
export default Component;
