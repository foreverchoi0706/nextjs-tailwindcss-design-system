import Typography from "@/components/atoms/Typography";
import { DropdownProps, DropdownItemProps, DropdownContext } from "./index.d";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const Context = createContext({} as DropdownContext);

function Default({ children, onItemClick, value }: DropdownProps) {
  const refDropdown = useRef<HTMLDivElement>(null);
  const [isShowList, setIsShowList] = useState<boolean>(false);

  useEffect(() => {
    const abortController = new AbortController();

    window.document.addEventListener(
      "click",
      ({ target }) => {
        if (refDropdown.current === null) return;
        console.log(refDropdown.current.contains(target as Node));
        setIsShowList(refDropdown.current.contains(target as Node));
      },
      {
        signal: abortController.signal,
      }
    );

    return () => {
      abortController.abort();
    };
  }, [isShowList]);

  return (
    <Context.Provider value={{ onItemClick, setIsShowList, value }}>
      <div
        ref={refDropdown}
        className="cursor-pointer relative  border inline-block"
      >
        <Typography
          className="p-4 "
          onClick={() => setIsShowList((prev) => !prev)}
        >
          {value}
        </Typography>
        <ul
          className={`${
            isShowList ? "block" : "hidden"
          } absolute z-10 top-[100%] mt-2 border left-0`}
        >
          {children}
        </ul>
      </div>
    </Context.Provider>
  );
}

function Item({ children, value }: DropdownItemProps) {
  const { onItemClick, setIsShowList } = useContext(Context);

  return (
    <li
      className="p-4 cursor-pointer"
      onClick={() => {
        onItemClick(value);
        setIsShowList(false);
      }}
    >
      {children}
    </li>
  );
}

const Component = Default as typeof Default & { Item: typeof Item };
Component.Item = Item;
export default Component;
