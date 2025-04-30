import { createContext } from "react";
import type { Modal } from "./index.d";
import Typography from "@/ui/atoms/Typography";

const Context = createContext({});

const Default = ({ children }: Modal.Props) => {
	return <Context value={{}}>{children}</Context>;
};

const Title = ({ children }: Modal.Title) => {
	return <Typography>{children}</Typography>;
};

const Component = Default as typeof Default & { Title: typeof Title };
Component.Title = Title;
export default Component;
