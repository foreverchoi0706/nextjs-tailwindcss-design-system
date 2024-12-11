import { createContext } from "react";

const Context = createContext({});

const Default = () => {
	return <Context value={{}}>dsada</Context>;
};

const Title = () => {
	return <h1>dsadad</h1>;
};

const Component = Default as typeof Default & { Title: typeof Title };
Component.Title = Title;
export default Component;
